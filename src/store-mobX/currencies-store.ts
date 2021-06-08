import {action, computed, observable} from "mobx";
import {CoinsType, TCoinDiff} from "../types/types";
import axios from "axios";
import {stores} from "./store";


export class CurrenciesStore {
    @observable public allCoins: CoinsType[] = [];
    @observable public diffObj: TCoinDiff = {};

    @computed
    get getAllCoins() {
        return this.allCoins
    }

   @computed
    get getDiffObj() {
        return this.diffObj
    }

    @action
    setAllCoins(allCoins: CoinsType[]): void {
        this.diffObj = this.diffCurrencies(this.allCoins,allCoins).reduce(
            (initObj:TCoinDiff,obj:CoinsType) => {
            const newObj: CoinsType = allCoins.find(o => o.name === obj.name)!;
            const oldObj: CoinsType = this.allCoins.find(itemObj => itemObj.name === newObj.name)!;
            const color: string = newObj.price === oldObj.price
                ? ''
                : newObj.price > oldObj.price ? 'green' : 'red'

            initObj[newObj.name] = color

            return initObj
        },{})
    }

    @action
    fetchAllCoins = async() => {
        let {data} = await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
        const coins: CoinsType[] = data.Data.map((coin: any) => {
            const obj: CoinsType = {
                name: coin.CoinInfo.Name,
                fullName: coin.CoinInfo.FullName,
                imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                price: coin.RAW.USD.PRICE.toFixed(2),
                volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
            }
            return obj
        })
       this.setAllCoins(coins)
        stores.converterStore.setSelectedCoin(coins[0])
    }

     diffCurrencies(arr1: CoinsType[], arr2: CoinsType[]) {
        return arr1.filter((obj, index) => {
            if (obj.price !== arr2[index].price) {
                return true
            }
            return false
        })
    }

}
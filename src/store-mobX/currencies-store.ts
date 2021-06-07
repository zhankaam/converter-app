import {action, computed, observable} from "mobx";
import {CoinsType} from "../types/types";
import axios from "axios";


export class CurrenciesStore {
    @observable public allCoins: CoinsType[] = [];

    @computed
    get getAllCoins() {
        return this.allCoins
    }

    @action
    setAllCoins(allCoins: CoinsType[]): void {
        this.allCoins = allCoins
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
       this.allCoins = coins
    }
}
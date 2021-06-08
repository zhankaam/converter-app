import {action, computed, observable} from "mobx";
import {CoinsType} from "../types/types";

export type TSelectedCoin = {
    name: string
    price: number
}

export class ConverterStore {
    @observable private selectedCoin: TSelectedCoin = {
        name: '',
        price: 0
    }

    @computed
    get getSelectedCoin() {
        return this.selectedCoin
    }


    @action
    setSelectedCoin(coin: CoinsType) {
        this.selectedCoin = {
            name: coin.name,
            price: coin.price
        }
    }


}
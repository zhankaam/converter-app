import {action, computed, observable} from "mobx";
import {CoinsType} from "../types/types";


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
}
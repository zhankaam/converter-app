import {CurrenciesStore} from './currencies-store'
import {ConverterStore} from './converter-store'


export const stores = {
    currenciesStore: new CurrenciesStore(),
    converterStore: new ConverterStore()
}
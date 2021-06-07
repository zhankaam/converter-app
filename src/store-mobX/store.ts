import {CurrenciesStore} from './cryproCurrencies-store'
import {ConverterStore} from './converter-store'


export const stores = {
    currenciesStore: new CurrenciesStore(),
    converterStore: new ConverterStore()
}
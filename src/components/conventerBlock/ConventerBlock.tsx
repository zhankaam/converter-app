import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import {ConverterStore} from "../../store-mobX/converter-store";
import {CurrenciesStore} from "../../store-mobX/currencies-store";


type TReducerState = {
    value1: string;
    value2: string;
    inPrice: number;
    outPrice: number;
};

type TSetValue1Action = {
    type: string;
    payload: string;
};

type TAction = TSetValue1Action;

function reducer(state: TReducerState, action: any): TReducerState {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                [action.payload.name]: action.payload.value,
                value2: String((Number(action.payload.value) * state.inPrice) / state.outPrice),
            };

        case 'SET_PRICES':
            return {
                ...state,
                inPrice: action.payload.in,
                outPrice: action.payload.out,
            };

        default:
            return state;
    }
}

export const ConventerBlock = inject('currenciesStore','converterStore')(observer(({classes,currenciesStore,converterStore}: { classes: any ,currenciesStore?:CurrenciesStore ,converterStore?: ConverterStore}) => {
    const coins: string[] = currenciesStore!.getAllCoins.map(coin => coin.name)
    const [selectedOutCoin,setSelectedOutCoin] = useState('USD')
    const inPrice = Number(converterStore?.getSelectedCoin.price) || 0;
    const outPrice =
        Number(currenciesStore!.getAllCoins.find(obj => obj.name === selectedOutCoin)?.price) || 0;
    const [state, dispatch] = React.useReducer(reducer, {
        value1: '',
        value2: '',
        inPrice,
        outPrice,
    });

    React.useEffect(() => {
        dispatch({
            type: 'SET_PRICES',
            payload: {
                in: inPrice,
                out: outPrice,
            },
        });
    }, [inPrice, outPrice]);

    const onUpdateField = (name: string, value: string) => {
        dispatch({
            type: 'SET_VALUE',
            payload: {
                name,
                value,
            },
        });
    };


    return (
        <Paper className={classes.paper}>
            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                    <TextField
                        type="number"
                        value={state.value1}
                        onChange={(e) => onUpdateField('value1',e.currentTarget.value)}
                        label="Сумма"/>
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Валюта
                    </InputLabel>
                    <Select value={converterStore?.getSelectedCoin.name || ''}>
                        {coins.map(name => (<MenuItem value={name}>{name}</MenuItem>))}
                    </Select>
                </FormControl>
            </div>
            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                    <TextField
                        type="number"
                        value={state.value2}
                        label="Сумма"/>
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Валюта
                    </InputLabel>
                    <Select onChange={e => setSelectedOutCoin(e.currentTarget.value as string)} value={selectedOutCoin}>
                        <MenuItem value='USD'>USD</MenuItem>
                        {coins.map(name => (
                            <MenuItem value={name}>{name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </Paper>
    );
}));

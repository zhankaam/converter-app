import React from 'react';
import {FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import {ConverterStore} from "../../store-mobX/converter-store";
import {CurrenciesStore} from "../../store-mobX/currencies-store";

export const ConventerBlock = inject('currenciesStore','converterStore')(observer(({classes,currenciesStore,converterStore}: { classes: any ,currenciesStore?:CurrenciesStore ,converterStore?: ConverterStore}) => {
    const coins: string[] = currenciesStore!.getAllCoins.map(coin => coin.name)

    return (
        <Paper className={classes.paper}>
            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                    <TextField label="Сумма"/>
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Валюта
                    </InputLabel>
                    <Select value={coins[0]}>
                        {coins.map(name => (<MenuItem value={name}>{name}</MenuItem>))}
                    </Select>
                </FormControl>
            </div>
            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                    <TextField label="Сумма"/>
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Валюта
                    </InputLabel>
                    <Select value={coins[0]}>
                        {coins.map(name => (<MenuItem value={name}>{name}</MenuItem>))}
                    </Select>
                </FormControl>
            </div>
            <Typography variant={"h5"} component={"h5"}>
                77,81 Российский рубль
            </Typography>
        </Paper>
    );
}));

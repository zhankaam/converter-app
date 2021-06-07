import React from 'react';
import {FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography} from "@material-ui/core";

export const ConventerBlock = ({classes}: { classes: any }) => {
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
                    <Select value={10}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
                    <Select value={10}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Typography variant={"h5"} component={"h5"}>
                77,81 Российский рубль
            </Typography>
        </Paper>
    );
};

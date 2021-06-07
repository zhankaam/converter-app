import React, {useEffect} from 'react';
import {Paper} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import {CoinsType} from "../../types/types";
import {inject, observer} from "mobx-react";
import {CurrenciesStore} from "../../store-mobX/currencies-store";

export const CryptoTable = inject('currenciesStore')(observer(({classes,currenciesStore}: {classes: any,currenciesStore?: CurrenciesStore }) => {

    const allCoins:CoinsType[] = currenciesStore!.getAllCoins;

    useEffect(() => {
        if(currenciesStore){
            currenciesStore?.fetchAllCoins()
        }
    },[])

    console.log(allCoins)
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell align="left"><b>Name</b></TableCell>
                        <TableCell align="left"><b>FullName</b></TableCell>
                        <TableCell align="left"><b>Price</b></TableCell>
                        <TableCell align="left"><b>Volume24hour</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!allCoins.length
                        ? 'Loading...'
                        : allCoins?.map((coin) => (
                            <TableRow key={coin.name}>
                                <TableCell component="th" scope="row">
                                    <img className={classes.icon} src={coin.imageUrl} alt={"try again later"}/>
                                </TableCell>
                                <TableCell align="left">{coin.name}</TableCell>
                                <TableCell align="left">{coin.fullName}</TableCell>
                                <TableCell align="left">${coin.price}</TableCell>
                                <TableCell align="left">${coin.volume24Hour}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}));

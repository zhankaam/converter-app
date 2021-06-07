import React, {useEffect, useState} from 'react';
import {Paper} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import {CoinsType} from "../../types/types";
import axios from "axios";

export const CryptoTable = ({classes}: {classes: any }) => {

    const [allCoins, setAllCoins] = useState<CoinsType[]>([]);

    useEffect(() => {
        async function getRequestData() {
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
            setAllCoins(coins)
        }

        getRequestData()
    }, [])

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
};

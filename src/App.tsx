import React, {useEffect, useState} from 'react';
import {Container, Grid} from "@material-ui/core";
import axios from "axios";
import {CryptoTable} from "./components/cryptoTable/CryptoTable";
import {ConventerBlock} from "./components/conventerBlock/ConventerBlock";
import {CoinsType, useStyles} from "./components/types/types";


export function App() {
    const classes = useStyles();
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
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <CryptoTable allCoins={allCoins} classes={classes}/>
                </Grid>
                <Grid item xs={4}>
                    <ConventerBlock classes={classes}/>
                </Grid>
            </Grid>
        </Container>
    );
}


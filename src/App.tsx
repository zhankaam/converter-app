import React, {useEffect, useState} from 'react';
import {
    Container,
    createStyles,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    TextField,
    Theme,
    Typography
} from "@material-ui/core";
import axios from "axios";
import {CryptoTable} from "./components/cryptoTable/CryptoTable";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(10)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },
        cryptoInputBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            marginTop: 10,
        },
        currencyInput: {
            minWidth: 'calc(70% - 10px)',
            marginRight: 10
        },
        currencyType: {
            minWidth: '30%',
        }
    }),
);


export type CoinsType = {
    name: string
    fullName: string
    imageUrl: string
    price: number
    volume24Hour: number
}

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
                    <CryptoTable allCoins={allCoins}/>
                </Grid>
                <Grid item xs={4}>
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
                </Grid>
            </Grid>
        </Container>
    );
}


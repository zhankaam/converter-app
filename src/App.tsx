import React, {useEffect, useState} from 'react';
import {
    Container,
    createStyles,
    FormControl,
    Grid, InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    TextField,
    Theme, Typography
} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
           padding:theme.spacing(10)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },
        cryptoInputBox:{
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
        },
        table: {
            minWidth: 580,
        },
    }),
);


type CoinsType = {
    name: string
    fullName: string
    imageUrl: string
    price: number
    volume24Hour: number
}

function App() {
    const classes = useStyles();
    const [allCoins,setAllCoins] = useState<CoinsType[]>([]);

    useEffect( () => {
        async function getRequestData(){
            let {data} = await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
           const coins = data.Data.map((coin: any) => {
             const obj = {
                 name: coin.coinInfo.Name,
                 fullName: coin.coinInfo.FullName,
                 imageUrl: coin.coinInfo.ImageUrl,
                 price: coin.RAW.USD.PRICE,
                 volume24Hour: coin.RAW.USD.VOLUME24HOUR,
             }
           })
            setAllCoins(coins)
        }


        getRequestData()
    },[])

  return (
  <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>
          <Grid item xs={8}>
                  <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                              <TableRow>
                                  <TableCell></TableCell>
                                  <TableCell align="left">FullName</TableCell>
                                  <TableCell align="left">Name</TableCell>
                                  <TableCell align="left">Price</TableCell>
                                  <TableCell align="left">volume24hour</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {allCoins?.map((coin) => (
                                  <TableRow key={coin.name}>
                                      <TableCell component="th" scope="row">
                                          {coin.imageUrl}
                                      </TableCell>
                                      <TableCell align="left">{coin.name}</TableCell>
                                      <TableCell align="left">{coin.fullName}</TableCell>
                                      <TableCell align="left">{coin.price}</TableCell>
                                      <TableCell align="left">{coin.volume24Hour}</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </TableContainer>
          </Grid>
          <Grid item xs={4}>
              <Paper className={classes.paper}>
                  <div className={classes.cryptoInputBox}>
                      <FormControl className={classes.currencyInput} >
                          <TextField label="Сумма" />
                      </FormControl>
                      <FormControl  className={classes.currencyType} >
                          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                              Валюта
                          </InputLabel>
                          <Select value={10} >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                      </FormControl>
                  </div>
                  <div className={classes.cryptoInputBox}>
                      <FormControl className={classes.currencyInput} >
                          <TextField label="Сумма" />
                      </FormControl>
                      <FormControl  className={classes.currencyType} >
                          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                              Валюта
                          </InputLabel>
                          <Select value={10} >
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

export default App;

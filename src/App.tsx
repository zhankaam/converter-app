import React from 'react';
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
        }
    }),
);


function App() {
    const classes = useStyles();

  return (
  <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>
          <Grid item xs={8}>
              <Paper className={classes.paper}>xs=12</Paper>
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

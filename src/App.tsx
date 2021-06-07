import React from 'react';
import {Container, Grid} from "@material-ui/core";
import {CryptoTable} from "./components/cryptoTable/CryptoTable";
import {ConventerBlock} from "./components/conventerBlock/ConventerBlock";
import {useStyles} from "./styles/styles";


export function App() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <CryptoTable classes={classes}/>
                </Grid>
                <Grid item xs={4}>
                    <ConventerBlock classes={classes}/>
                </Grid>
            </Grid>
        </Container>
    );
}


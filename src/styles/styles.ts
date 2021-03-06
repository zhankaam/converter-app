import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
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
        },
        table: {
            minWidth: 580,
        },
        icon: {
            width: 25,
            height: 25,
            borderRadius: 30,
        },
        redColumn: {
            backgroundColor: '#ffdada'
        },
        greenColumn: {
            backgroundColor: '#d8ffc4'
        },
        rowCurrency: {
            cursor: 'pointer'
        }
    }),
);
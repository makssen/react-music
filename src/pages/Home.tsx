import React, { FC } from 'react';
import { Typography, Paper, Grid, Button } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            flexWrap: 'wrap'
        },
        paper: {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            padding: theme.spacing(2),
            color: '#fff',
            textAlign: 'center',
            height: 'calc(100vh - 120px)',
            backgroundImage: 'url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        btnLink: {
            backgroundColor: '#673ab7',
            marginTop: 10
        }
    })
);

export const Home: FC = () => {

    const classes = useStyles();

    const history = useHistory();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h4" component="h2">Добро пожаловать в Music App <MusicNoteIcon /></Typography>
                        <Typography variant="body1">Здесь собраны лучшие треки!</Typography>
                        <Button
                            onClick={() => history.push('/music')}
                            className={classes.btnLink}
                            variant="contained"
                            color="primary"
                        >
                            Перейти к музыке
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div >
    )
}

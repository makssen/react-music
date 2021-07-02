import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Box, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../components/Music.styles';
import { IMusic } from '../types/types';
import { useTypeSelector } from '../hooks/useTypeSelector';

export const MusicPage = () => {

    const classes = useStyles();

    const { tracks } = useTypeSelector(state => state.tracks);

    const [music, setMusic] = useState(Object);

    const { id } = useParams<any>();

    useEffect(() => {
        setMusic(tracks.find(item => item.id === id));
    }, [music]);

    console.log('render')


    const history = useHistory();

    return (
        <>
            <Button onClick={() => history.push('/music')} className={classes.btn} ><ArrowBackIosIcon />К списку</Button>
            <Paper elevation={3}>
                <Grid container>
                    <div className={classes.perview}>
                        <img className={classes.perviewImg} src={music.img} alt={music.name} />
                    </div>
                    <Grid item className={classes.grid}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {music.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {music.artist}
                        </Typography>
                        <Box mt={3}>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Длительность - {music.duration}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Прослушиваний - 200
                            </Typography>
                        </Box>
                        <Grid item>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Оставьте комментарий:
                            </Typography>
                            <form>
                                <TextField className={classes.input} label="Ваше имя" fullWidth variant="outlined" />
                                <TextField className={classes.input} label="Комментарий" fullWidth variant="outlined" multiline rows={3} />
                                <Button type="submit" variant="contained" color="primary">
                                    Отправить
                                </Button>
                            </form>
                        </Grid>
                        <div>
                            {/* <div>
                                Автор -  {music.comments.username}
                            </div>
                            <div>
                                Комментарий -  {music.comments.text}
                            </div> */}
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

import React, { FC } from 'react';
import { IMusic } from '../types/types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './Music.styles';
import { useHistory } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useAction';

interface MusicItemProps {
    music: IMusic,
    active?: boolean
}

export const MusicItem: FC<MusicItemProps> = ({ music, active = false }) => {

    const classes = useStyles();
    const history = useHistory();
    const { pauseTrack, playTrack, setActiveTrack } = useAction();

    const play = (event: any) => {
        event.stopPropagation();
        setActiveTrack(music);
        playTrack();
    }

    return (
        <Card onClick={() => history.push(`/music_page/${music.id}`)} className={classes.musicItemCard} elevation={3}>
            <img className={classes.media} src={music.img} alt={music.name} />
            <Grid className={classes.musicDiscription} container direction="column">
                <Typography gutterBottom variant="h5" component="h2">
                    {music.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {music.artist}
                </Typography>
            </Grid>
            <CardActions>
                <Button onClick={play} className={classes.btn}>
                    {active ? <PauseIcon /> : <PlayArrowIcon />}
                </Button>
            </CardActions>
            <Typography variant="body2" color="textSecondary" component="p">
                {active && <span>02:30 / 03:00</span>}
            </Typography>
        </Card>
    )
}

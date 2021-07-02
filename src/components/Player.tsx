import { Button, Grid, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { MusicProgress } from './MusicProgress';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { useAction } from '../hooks/useAction';
import { useStyles } from './Music.styles';
import { IMusic } from '../types/types';
import { useTypeSelector } from '../hooks/useTypeSelector';


export const Player: FC = () => {

    const classes = useStyles();

    const { active, currentTime, duration, pause, volume } = useTypeSelector(state => state.player);
    const { pauseTrack, playTrack, setVolume, setActiveTrack, setCurrentTime, setDuration } = useAction();
    const [audio, setAudio] = useState<any>();

    const play = () => {
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    }

    const setPlayAudio = () => {
        if (active) {
            audio.src = active?.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration));
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            }
        }
    }


    const changeVolume = (event: any, newValue: number | number[]) => {
        audio.volume = newValue as number / 100;
        setVolume(newValue as number);
    }

    const changeCurrentTime = (event: any, newValue: number | number[]) => {
        audio.currentTime = newValue as number;
        setCurrentTime(newValue as number);
    }

    const getTime = (time: number) => {
        let m = Math.floor(time % 3600 / 60);
        let s = Math.floor(time % 3600 % 60);
        let displayMinutes = m < 10 ? '0' + m : m;
        let displaySeconds = s < 10 ? '0' + s : s;
        return `${displayMinutes}:${displaySeconds}`;
    }

    useEffect(() => {
        if (!audio) {
            setAudio(new Audio());
        } else {
            setPlayAudio();
            play();
        }
    }, [active]);

    if (!active) return null;

    return (
        <div className={classes.player}>
            <Button onClick={play} className={classes.btn}>
                {pause ? <PlayArrowIcon /> : <PauseIcon />}
            </Button>
            <Grid className={classes.musicDiscription} container direction="column">
                <Typography gutterBottom variant="h5" component="h2">
                    {active?.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {active?.artist}
                </Typography>
            </Grid>
            <MusicProgress left={currentTime} right={duration} time={`${getTime(currentTime)} / ${getTime(duration)}`} handleChange={changeCurrentTime} />
            <VolumeUp style={{ marginLeft: 'auto', marginRight: 20 }} />
            <MusicProgress left={volume} right={100} handleChange={changeVolume} />
        </div>
    )
}

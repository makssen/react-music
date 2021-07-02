import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});


interface MusicProgressProps {
    right: number,
    left: number,
    time?: string,
    handleChange: any
}

export const MusicProgress: FC<MusicProgressProps> = ({ left, right, time, handleChange }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider value={left} min={0} max={right} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <div>
                    {time ? time : `${left} / ${right}`}
                </div>
            </Grid>
        </div>
    )
}

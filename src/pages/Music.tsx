import React, { FC, useEffect } from 'react';
import { Typography } from '@material-ui/core'
import { IMusic } from '../types/types';
import { MusicList } from '../components/MusicList';
import { Player } from '../components/Player';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { fetchTracks } from '../store/actions';
import { useDispatch } from 'react-redux';
import { useAction } from '../hooks/useAction';

export const Music: FC = () => {


    const { tracks } = useTypeSelector(state => state.tracks);
    const { fetchTracks } = useAction();

    useEffect(() => {
        fetchTracks();
    }, []);


    return (
        <div>
            <Typography variant="h5" component="h2">Список треков</Typography>
            <MusicList musics={tracks} />
            <Player />
        </div>
    )
}

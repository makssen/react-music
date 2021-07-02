import React, { FC } from 'react';
import { IMusic } from '../types/types';
import { MusicItem } from './MusicItem';

interface MusicListProps {
    musics: IMusic[]
}

export const MusicList: FC<MusicListProps> = ({ musics }) => {
    return (
        <div>
            {musics.map((item, i) => <MusicItem key={i} music={item} />)}
        </div>
    )
}

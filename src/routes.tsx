import { IRoutes } from './types/types';
import HomeIcon from '@material-ui/icons/Home';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Home, PlayList, Albums, Music, LoadTrack } from './pages';


export const routes: IRoutes[] = [
    {
        label: 'Главная',
        path: '/',
        exact: true,
        icon: <HomeIcon />,
        component: Home
    },
    {
        label: 'Список треков',
        path: '/music',
        icon: <MusicNoteIcon />,
        component: Music
    },
    {
        label: 'Плейлист',
        path: '/playlist',
        icon: <MusicVideoIcon />,
        component: PlayList
    },
    {
        label: 'Альбомы',
        path: '/albums',
        icon: <LibraryMusicIcon />,
        component: Albums
    },
    {
        label: 'Загрузить трек',
        path: '/load',
        icon: <GetAppIcon />,
        component: LoadTrack
    }
]
import { FC } from "react";

export interface IRoutes {
    label: string,
    path: string,
    exact?: boolean,
    icon: any,
    component: FC
}

export interface IComment {
    id: string,
    username: string,
    text: string

}

export interface IMusic {
    id: string,
    name: string,
    artist: string,
    duration: number,
    img: string,
    audio: string,
    comments: IComment[]
}

export interface PlayerState {
    active: null | IMusic,
    volume: number,
    duration: number,
    currentTime: number,
    pause: boolean
}

export enum PlayerActionsType {
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    SET_ACTIVE = 'SET_ACTIVE',
    SET_DURATION = 'SET_DURATION',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_VOLUME = 'SET_VOLUME'
}

interface PlayAction {
    type: PlayerActionsType.PLAY,
}

interface PauseAction {
    type: PlayerActionsType.PAUSE,
}

interface SetActiveAction {
    type: PlayerActionsType.SET_ACTIVE,
    payload: IMusic
}

interface SetDuratinAction {
    type: PlayerActionsType.SET_DURATION,
    payload: number
}

interface SetCurrentTimeAction {
    type: PlayerActionsType.SET_CURRENT_TIME,
    payload: number
}

interface SetVolumeAction {
    type: PlayerActionsType.SET_VOLUME,
    payload: number
}


export type PlayerAction = PlayAction | PauseAction | SetActiveAction | SetDuratinAction | SetCurrentTimeAction | SetVolumeAction;


export interface TrackState {
    tracks: IMusic[]
}

export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS'
}

export interface FetchTrackAction {
    type: TrackActionTypes.FETCH_TRACKS,
    payload: any
}
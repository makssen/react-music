import { Dispatch } from "react";
import { db } from "../../firebase";
import { FetchTrackAction, IMusic, PlayerAction, PlayerActionsType, TrackActionTypes } from "../../types/types";

export const playTrack = (): PlayerAction => ({
    type: PlayerActionsType.PLAY
});

export const pauseTrack = (): PlayerAction => ({
    type: PlayerActionsType.PAUSE
});

export const setDuration = (payload: number): PlayerAction => ({
    type: PlayerActionsType.SET_DURATION,
    payload
});

export const setCurrentTime = (payload: number): PlayerAction => ({
    type: PlayerActionsType.SET_CURRENT_TIME,
    payload
});

export const setVolume = (payload: number): PlayerAction => ({
    type: PlayerActionsType.SET_VOLUME,
    payload
});

export const setActiveTrack = (payload: IMusic): PlayerAction => ({
    type: PlayerActionsType.SET_ACTIVE,
    payload
});


export const fetchTracks = () => async (dispatch: Dispatch<FetchTrackAction>) => {
    try {
        db.collection('tracks')
            .onSnapshot(snapshot => {
                dispatch({
                    type: TrackActionTypes.FETCH_TRACKS,
                    payload: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                });
            });
    } catch (error) {
        console.log(error);
    }
}

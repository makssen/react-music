import { FetchTrackAction, TrackActionTypes, TrackState } from '../../types/types';

const initialState: TrackState = {
    tracks: []
}

export const trackReducer = (state = initialState, action: FetchTrackAction): TrackState => {
    switch (action.type) {
        case TrackActionTypes.FETCH_TRACKS:
            return {
                ...state,
                tracks: action.payload
            }
        default:
            return state;
    }
}
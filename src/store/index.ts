import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { playerReducer } from './reducers/playerReducer';
import { trackReducer } from './reducers/trackReducer';

const rootReducer = combineReducers({
    player: playerReducer,
    tracks: trackReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
import * as GenreAction from './genre.actions';
import { GenreModel } from 'src/app/models/genre.model';

export interface GenreState {
    genres: State;
}

export interface State {
    genres: GenreModel;
}

const initialState = {
    genres: {}
};

export function genreReducer(state = initialState, action: GenreAction.GenreActions) {
    switch (action.type) {
        case GenreAction.GENRE :
            return {
                ...state,
                genres: action.payload
            }; 
        case GenreAction.FETCH_GENRE :
            return {
                ...state
            };
        default:
            return {
                ...state
            }
    }

};

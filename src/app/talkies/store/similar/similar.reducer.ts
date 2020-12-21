import * as SimilarAction from './similar.actions';

export interface SimilarState {
    similar: State;
}

export interface State {
    similarMovies: [];
}

const initialState = {
    similarMovieState: false,
    similarMovies: []
};

export function similarReducer(state = initialState, action: SimilarAction.SimilarAction) {
    switch (action.type) {
        case SimilarAction.FETCH_SIMILAR:
            return {
                ...state,
                similarMovieState: action.payload
            };
        case SimilarAction.SIMILAR_MOVIES:
            return {
                ...state,
                similarMovies: action.payload
            };
        default:
            return {
                ...state,
            };
    }

};

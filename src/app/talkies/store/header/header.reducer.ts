import * as HeaderAction from './header.actions';

export interface HeaderState {
    headerState: State;
}

export interface State {
    headerState: false;
}

const initialState = {
    headerState: false
};

export function headerReducer(state = initialState, action: HeaderAction.ShowHeader) {
    switch (action.type) {
        case HeaderAction.HEADER_STATE:
            return {
                ...state,
                headerState: action.payload
            };
        default :
        return {
            ...state,
        }
    }

};

import * as UpcomingActions from './talkies.actions';

export interface AppState {
    upcomingTalkies: State;
}

export interface State {
    upcomingTalkies: [];
}

const initialState = {
    upcomingTalkies: []
};

export function talkiesReducer(state = initialState, action: UpcomingActions.TalkiActions) {
    switch (action.type) {
        case UpcomingActions.UPCOMING_TALKIE:
            return {
                ...state,
                upcomingTalkies: action.payload
            };
        case UpcomingActions.FETCH_UPCOMING_TALKIE :
            return {
                ...state,
                country: action.payload.selectedCountry
            };
        default:
            return {
                ...state
            }
    }

};
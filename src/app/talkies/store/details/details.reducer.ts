import * as DetailsAction from './details.actions';
import { DetailsModel } from 'src/app/models/details.model';

export interface DetailsState {
    details: State;
}

export interface State {
    details: DetailsModel;
}

const initialState = {
    details: {}
};

export function detailsReducer(state = initialState, action: DetailsAction.TalkieDetailsActions) {
    switch (action.type) {
        case DetailsAction.DETAILS:
            return {
                ...state,
                details: action.payload
            };
        case DetailsAction.FETCH_DETAILS:
            return {
                ...state
            };
        default:
            return {
                ...state
            }
    }

};

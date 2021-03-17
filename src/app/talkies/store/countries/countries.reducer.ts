import * as CountryAction from './countries.actions';

export interface CountryState {
    selectedCountry: State;
}

export interface State {
    selectedCountry: string;
}

const initialState = {
    selectedCountry: 'US'
};

export function countryrReducer(state = initialState, action: CountryAction.CountryAction) {
    switch (action.type) {
        case CountryAction.COUNTRY_CHANGED:
            return {
                ...state,
                selectedCountry: action.payload
            };
        case CountryAction.TYPE_CHANGED:
            return {
                ...state,
                type: action.payload
            }
        default:
            return {
                ...state,
            }
    }

};

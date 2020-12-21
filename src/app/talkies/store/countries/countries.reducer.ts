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

export function countryrReducer(state = initialState, action: CountryAction.CountryChanged) {
    switch (action.type) {
        case CountryAction.COUNTRY_CHANGED:
            return {
                ...state,
                selectedCountry: action.payload
            };
        default:
            return {
                ...state,
            }
    }

};

import { Action } from '@ngrx/store';

export const COUNTRY_CHANGED = 'COUNTRY_CHANGED';
export const TYPE_CHANGED = 'TYPE_CHANGED';

export class CountryChanged implements Action {
    readonly type = COUNTRY_CHANGED;
    constructor(public payload: String) { }
}

export class TypeChanged implements Action {
    debugger
    readonly type = TYPE_CHANGED;
    constructor(public payload: String) { }
}

export type CountryAction = CountryChanged | TypeChanged;

import { Action } from '@ngrx/store';

export const HEADER_STATE = 'HEADER_STATE';

export class ShowHeader implements Action {
    readonly type = HEADER_STATE;
    constructor(public payload: {}) { }
}

export type HeaderAction = ShowHeader;

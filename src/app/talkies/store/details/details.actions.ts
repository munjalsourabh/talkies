import { Action } from '@ngrx/store';
import { DetailsModel } from 'src/app/models/details.model';

export const DETAILS = 'DETATILS';
export const FETCH_DETAILS = 'FETCH_DETAILS';


export class DetailsAction implements Action {
    readonly type = DETAILS;
    constructor(public payload: {details: DetailsModel}) { }
}

export class FetchDetailsAction implements Action {
    readonly type = FETCH_DETAILS;
    constructor(public payload: string) { }
}

export type TalkieDetailsActions = DetailsAction | FetchDetailsAction

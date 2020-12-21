import {Action} from '@ngrx/store';
import { TalkieModel } from '../../models/talkie.model';


export const UPCOMING_TALKIE = 'UPCOMING_TALKIE';
export const FETCH_UPCOMING_TALKIE = 'FETCH_UPCOMING_TALKIE';

export class UpcomingTalkie implements Action {
    readonly type = UPCOMING_TALKIE;
    constructor(public payload: TalkieModel[]) {}
}

export interface UpcomingMovie {
    selectedCountry: string
}

export class FetchUpcoming implements Action {
    readonly type =  FETCH_UPCOMING_TALKIE;
    constructor(public payload: UpcomingMovie) {}
}

export type TalkiActions = UpcomingTalkie | FetchUpcoming;

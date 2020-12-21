import { Action } from '@ngrx/store';

export const VIDEOS = 'VIDEOS';
export const FETCH_VIDEOS = 'FETCH_VIDEOS';


export class VideosAction implements Action {
    readonly type = VIDEOS;
    constructor(public payload: {}) { }
}

export class FetchVideosAction implements Action {
    readonly type = FETCH_VIDEOS;
}

export type VideosActions = VideosAction | FetchVideosAction

import { Action } from '@ngrx/store';
import { TalkieModel } from 'src/app/models/talkie.model';

export const FETCH_SIMILAR = 'FETCH_SIMILAR';
export const SIMILAR_MOVIES = 'SIMILAR_MOVIES';

export class SimilarMoviesAction implements Action {
    readonly type = SIMILAR_MOVIES;
    constructor(public payload: TalkieModel[]) { }
}

export class FetchSimilarAction implements Action {
    readonly type = FETCH_SIMILAR;
    constructor(public payload: string) {}
}

export type SimilarAction =  FetchSimilarAction | SimilarMoviesAction;

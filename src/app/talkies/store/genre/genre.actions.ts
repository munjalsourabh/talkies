import { Action } from '@ngrx/store';

export const GENRE = 'GENRE';
export const FETCH_GENRE = 'FETCH_GENRE';


export class GenreAction implements Action {
    readonly type = GENRE;
    constructor(public payload: {}) {}
}

export class FetchGenreAction implements Action {
    readonly type = FETCH_GENRE;
}

export type GenreActions = GenreAction | FetchGenreAction

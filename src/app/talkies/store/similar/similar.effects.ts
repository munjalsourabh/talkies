import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators'
import * as SimilarActions from './similar.actions'
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TalkieModel } from '../../../models/talkie.model';

@Injectable()
export class SimilarEffects {
    constructor(private actions: Actions, private http: HttpClient) { }
    @Effect()
    similar = this.actions.pipe(
        ofType(SimilarActions.FETCH_SIMILAR),
        switchMap(({payload}: any) => {
            return this.http.get<{ results: TalkieModel[] }>(
                `https://api.themoviedb.org/3/movie/${payload}/similar?api_key=6d327dfc65804feb593492f59fdabaca&language=en-US&page=1`
            ).pipe(
                map((response) => {
                    return new SimilarActions.SimilarMoviesAction(response.results);
                }),
                catchError(e => {
                    return of() 
                })
            )
        }))
}

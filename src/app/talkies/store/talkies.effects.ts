import {Actions, ofType, Effect} from '@ngrx/effects';
import {switchMap, catchError, map} from 'rxjs/operators'
import * as UpcomingActions from './talkies.actions'
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import {TalkieModel} from '../../models/talkie.model';

@Injectable()
export class UpcomingEffects {
    constructor(private actions: Actions, private http: HttpClient) {}
    @Effect()
    upcoming = this.actions.pipe(
        ofType(UpcomingActions.FETCH_UPCOMING_TALKIE),
        switchMap((payload: any) => {
            return this.http.get<{results: TalkieModel[]}>(
                `https://api.themoviedb.org/3/movie/upcoming?region=${payload.payload.selectedCountry}&api_key=6d327dfc65804feb593492f59fdabaca`
            ).pipe(
                map((response) => {
                    return new UpcomingActions.UpcomingTalkie(response.results);
                }),
                catchError(e => {
                    return of()
                })
            )
        }))
}

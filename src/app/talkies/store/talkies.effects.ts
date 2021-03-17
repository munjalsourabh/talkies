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
            const type = payload.payload.type ? payload.payload.type : 'upcoming';
            let url = ''
            if (type == 'trending') {
                url = `https://api.themoviedb.org/3/trending/movie/week?api_key=6d327dfc65804feb593492f59fdabaca`
            } else {
                url = `https://api.themoviedb.org/3/movie/${type}?region=${payload.payload.selectedCountry}&api_key=6d327dfc65804feb593492f59fdabaca`
            }
            
            console.log(payload);
            return this.http.get<{results: TalkieModel[]}>(url).pipe(
                map((response) => {
                    return new UpcomingActions.UpcomingTalkie(response.results);
                }),
                catchError(e => {
                    return of()
                })
            )
        }))
}

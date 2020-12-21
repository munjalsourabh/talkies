import { Actions, Effect, ofType } from '@ngrx/effects';
import * as TalkieDetail from './details.actions';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailsModel } from 'src/app/models/details.model';

@Injectable()
export class DetailsEffects {
    constructor(private actions: Actions, private http: HttpClient) {}

    @Effect()
    genre = this.actions.pipe(
        ofType(TalkieDetail.FETCH_DETAILS),
        switchMap(({payload}) => {
            return this.http.get<{details: DetailsModel}>(`https://api.themoviedb.org/3/movie/${payload}?api_key=6d327dfc65804feb593492f59fdabaca&language=en-US&append_to_response=credits,videos`)
                .pipe(
                    map((response) => {
                        return new TalkieDetail.DetailsAction(response);
                    })
                )

        })
    )
}
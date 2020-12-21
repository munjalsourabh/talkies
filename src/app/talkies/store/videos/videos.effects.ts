import { Actions, Effect, ofType } from '@ngrx/effects';
import * as VideosAction from './videos.actions';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GenreEffects {
    constructor(private actions: Actions, private http: HttpClient) { }

    @Effect()
    genre = this.actions.pipe(
        ofType(VideosAction.FETCH_VIDEOS),
        switchMap(() => {
            return this.http.get<{ genres: { name: string, id: number }[] }>(
                'https://api.themoviedb.org/3/genre/movie/list?api_key=6d327dfc65804feb593492f59fdabaca&language=en-US'
            )
                .pipe(
                    map((response) => {
                        const genreMap = {};
                        response.genres.forEach(genre => genreMap[genre.id] = genre.name);
                        // return new VideosAction.FetchVideosAction(genreMap);
                    })
                )

        })
    )
}

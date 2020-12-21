import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import * as Genre from '../talkies/store/genre/genre.reducer';
import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';
import { FetchGenreAction } from '../talkies/store/genre/genre.actions';
import { GenreModel } from '../models/genre.model';


@Injectable()
export class GenreGaurd implements CanActivate {
    constructor(private store: Store<Genre.GenreState>) {}

    getFromStoreOrApi() {
        return this.store
            .select('genres')
            .pipe(
                tap((genres: {genres: GenreModel}) => {
                    if (!Object.keys(genres.genres).length) {
                        this.store.dispatch(new FetchGenreAction())
                    }
                }),
                filter((genres) => !!genres),
                take(1)
            );
    }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.getFromStoreOrApi().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
        // return of(true | false)
    }
}
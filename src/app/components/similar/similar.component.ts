import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Similar from '../../talkies/store/similar/similar.reducer';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {
  similarMovies: Object
  constructor(
    private store: Store<Similar.SimilarState>,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.store.select('similar').subscribe((data) => {
      console.log('similar movies ', data);
      if (data) {
        this.similarMovies = data.similarMovies;
      }
    });
  }

  ngOnInit(): void {
  }

  routeToDetail(movie) {
    this.router.navigate([`/details/${movie.id}`]);
  }
  getBackground(posterPath) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://image.tmdb.org/t/p/w220_and_h330_face' + posterPath);

  }
}

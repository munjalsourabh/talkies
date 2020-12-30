import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Similar from '../../talkies/store/similar/similar.reducer';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { tns } from "tiny-slider/src/tiny-slider"

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {
  similarMovies: Object
  carouselInitiated: boolean = false;
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

  ngAfterContentInit(): void {
    if (!this.carouselInitiated) {

      setTimeout(() => {
        var slider = tns({
          container: '.my-slider',
          // items: 3,
          slideBy: 'page',
          fixedWidth: 200,
          mouseDrag: true,
          controls: false,
        });
        this.carouselInitiated = true;
      }, 2000)
    }
  }

  routeToDetail(movie) {
    this.router.navigate([`/details/${movie.id}`]);
  }
  getBackground(posterPath) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://image.tmdb.org/t/p/w220_and_h330_face' + posterPath);

  }

  isMobile(): boolean {
    return window.matchMedia("only screen and (max-width: 760px)").matches;
  }
}

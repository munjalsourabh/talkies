import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromDetailsReducer from '../../talkies/store/details/details.reducer';
import { FetchDetailsAction } from 'src/app/talkies/store/details/details.actions';
import { Cast } from 'src/app/models/details.model';
import { DomSanitizer } from '@angular/platform-browser';
import { FetchSimilarAction} from 'src/app/talkies/store/similar/similar.actions'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  casts: [Cast];
  crew: {} = {};
  details = {
    poster_path: '',
    backdrop_path: '',
    title: '',
    tagline: '',
    videos: {
      results: []
    }
  };
  constructor(
      private route: ActivatedRoute,
      private store: Store<fromDetailsReducer.DetailsState>,
      private sanitizer: DomSanitizer) {
        this.route.params.subscribe((ev) => {
          this.store.dispatch(new FetchDetailsAction(ev.movieId));
          setTimeout(() => {
            this.store.dispatch(new FetchSimilarAction(ev.movieId));
          }, 1000); 
        });
      }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('movieId');

    this.store.select('details').subscribe(({details}) => {
      if (details.credits) {
        this.casts = details.credits.cast;
        this.details = details;
        this.crew = details.credits.crew.reduce(function (accumulator, elem) {
          if (elem.department in accumulator) {
            accumulator[elem.department].push(elem)
          } else {
            accumulator[elem.department] = [elem];
          }
          return accumulator
        }, {})
      }
    });
  }

  getSanitizedUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('//www.youtube.com/embed/' + url);
  }

}

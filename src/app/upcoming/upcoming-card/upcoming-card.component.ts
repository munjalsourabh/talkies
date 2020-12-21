import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TalkieModel } from 'src/app/models/talkie.model';
import { Store } from '@ngrx/store';
import * as GenreSta from '../../talkies/store/genre/genre.reducer';
import { FetchSimilarAction } from 'src/app/talkies/store/similar/similar.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'upcoming-card',
  templateUrl: './upcoming-card.component.html',
  styleUrls: ['./upcoming-card.component.scss']
})
export class UpcomingCardComponent implements OnInit, OnChanges {
  @Input()
  talkie: TalkieModel;

  genres: {} = {};
  constructor(
      private store: Store<GenreSta.GenreState>,
      private router: Router) { }

  ngOnInit(): void {
    this.store.select('genres').subscribe((data) => {
      this.genres = data.genres
    });
  }

  ngOnChanges(): void {
  }

  navigateToDetails(movieId): void {
    this.router.navigate([`details/${movieId}`]);
  }

}

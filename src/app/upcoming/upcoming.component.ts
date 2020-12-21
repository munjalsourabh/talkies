import { Component, OnInit, Injectable, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { TalkieModel } from '../models/talkie.model';
import * as fromAppReducer from '../talkies/store/talkies.reducer';

@Component({
  selector: 'upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
@Injectable()
export class UpcomingComponent implements OnInit {
  @Input()
  upcomingTalkies: TalkieModel[]  = [];

  constructor(
      private store: Store<fromAppReducer.AppState>,
      ) { }

  ngOnInit(): void {
    this.store.select('upcomingTalkies').subscribe((data) => {
      this.upcomingTalkies = data.upcomingTalkies;
    })
  }
}

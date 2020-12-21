import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as fromHeaderReducer from '../../talkies/store/header/header.reducer';
import { HttpClient } from '@angular/common/http';
import { TalkieModel } from 'src/app/models/talkie.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShowHeader } from 'src/app/talkies/store/header/header.actions';

export interface User {
  name: string;
}

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();

  filteredOptions: TalkieModel[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<fromHeaderReducer.HeaderState>
  ) {}

  ngOnInit() {
    this.onChanges();
  }


  onChanges(): void {
    this.myControl.valueChanges.subscribe((val) => {
      this.http.get<{results: TalkieModel[]}>(`https://api.themoviedb.org/3/search/movie?api_key=6d327dfc65804feb593492f59fdabaca&language=en-US&query=${val}&page=1&include_adult=false`)
      .subscribe((resp) => {
        if (typeof(val) === 'string') {
          this.filteredOptions = resp.results;
        }
      })
    });

    this.router
  }

  displayFn = (option: TalkieModel): string => {
    // setTimeout(() => {
      this.store.dispatch(new ShowHeader(false));
      if (option && option.id) {
        this.router.navigate([`/details/${option.id}`]);
      }
    // }, 200)
    return option && option.title ? option.title : '';
  }

}




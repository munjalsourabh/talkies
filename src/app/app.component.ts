import { Component, OnInit, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchUpcoming } from './talkies/store/talkies.actions';
import * as fromCountryReducer from './talkies/store/countries/countries.reducer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent implements OnInit{
  constructor(
      private store: Store,
      private route: ActivatedRoute,
      private countryStore: Store<fromCountryReducer.CountryState>) {}


  country: string = 'US';
  ngOnInit() {
    const path = location.pathname.slice(1)
    this.store.dispatch(new FetchUpcoming({type: path, selectedCountry: 'US'}));
    this.countryStore.select('selectedCountry').subscribe((data) => {
      if (data.selectedCountry != this.country) {
        this.country = data.selectedCountry;
        this.store.dispatch(new FetchUpcoming(data));
      }
    });

  }
}

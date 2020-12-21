import { Component, OnInit, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchUpcoming } from './talkies/store/talkies.actions';
import * as fromCountryReducer from './talkies/store/countries/countries.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent implements OnInit{
  constructor(
      private store: Store,
      private countryStore: Store<fromCountryReducer.CountryState>) {}

  country: string = 'us';
  ngOnInit() {
    this.store.dispatch(new FetchUpcoming({selectedCountry: 'us'}));
    this.countryStore.select('selectedCountry').subscribe((data) => {
      if (data.selectedCountry != this.country) {
        this.country = data.selectedCountry;
        this.store.dispatch(new FetchUpcoming(data));
      }
    });

  }
}

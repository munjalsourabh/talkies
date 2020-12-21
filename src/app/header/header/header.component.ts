import { Component, OnInit } from '@angular/core';
import * as fromHeaderReducer from '../../talkies/store/header/header.reducer'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {ShowHeader} from '../../talkies/store/header/header.actions'
import countries from './../../configs/countries';
import { CountryChanged } from 'src/app/talkies/store/countries/countries.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerState: boolean;
  countries: [];
  selectedCountry: countries[0];
  constructor(
    private router: Router,
    private store: Store<fromHeaderReducer.HeaderState>
  ) {}

  ngOnInit(): void {
    this.countries = countries;
    this.selectedCountry = countries[0];
  }

  showNav(): void {
    this.store.select('headerState').subscribe(({headerState}) => {
      this.headerState = headerState;
      if (headerState) {
        document.getElementsByClassName('menu-bg')[0].classList.add('fs')
        document.getElementsByClassName('menu-items')[0].classList.add('fs')
        document.getElementsByClassName('menu-burger')[0].classList.add('fs')

        document.getElementsByClassName('search')[0].classList.add('fs')
      } else {
        document.getElementsByClassName('menu-bg')[0].classList.remove('fs')
        document.getElementsByClassName('menu-items')[0].classList.remove('fs')
        document.getElementsByClassName('menu-burger')[0].classList.remove('fs')

        document.getElementsByClassName('search')[0].classList.remove('fs')
      }
    });
    this.store.dispatch(new ShowHeader(!this.headerState));
  }

  redirectTo(path): void {
    this.router.navigate([path]);
    this.store.dispatch(new ShowHeader(false));
  }

  countrySelected(ev): void {
    this.store.dispatch(new ShowHeader(false));
    this.store.dispatch(new CountryChanged(ev));
  }
}

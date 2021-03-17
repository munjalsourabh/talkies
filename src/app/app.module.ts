import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import { DetailsComponent} from './components/details/details.component';
import { DetailsEffects } from './talkies/store/details/details.effects';
import { detailsReducer } from './talkies/store/details/details.reducer';
import { headerReducer } from './talkies/store/header/header.reducer';
import { countryrReducer } from './talkies/store/countries/countries.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenreEffects } from './talkies/store/genre/genre.effects';
import { GenreGaurd } from './guards/genre.gaurd';
import { genreReducer } from './talkies/store/genre/genre.reducer';
import { HeaderComponent } from './header/header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SearchComponent } from './components/search/search.component';
import { talkiesReducer } from './talkies/store/talkies.reducer';
import { UpcomingCardComponent } from './upcoming/upcoming-card/upcoming-card.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { UpcomingEffects } from './talkies/store/talkies.effects';
import { SimilarEffects } from './talkies/store/similar/similar.effects';
import { SimilarComponent } from './components/similar/similar.component';
import { similarReducer } from './talkies/store/similar/similar.reducer';

const routes: Routes = [
  {path: '', redirectTo: 'upcoming', pathMatch: 'full'},
  { path: 'upcoming', canActivate: [GenreGaurd], component: UpcomingComponent },
  { path: 'popular', canActivate: [GenreGaurd], component: UpcomingComponent },
  { path: 'trending', canActivate: [GenreGaurd], component: UpcomingComponent},
  { path: 'details/:movieId', component: DetailsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UpcomingComponent,
    UpcomingCardComponent,
    HeaderComponent,
    DetailsComponent,
    SearchComponent,
    SimilarComponent,
  ],
  imports: [
    MatIconModule,
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([UpcomingEffects, GenreEffects, DetailsEffects, SimilarEffects]),
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      upcomingTalkies: talkiesReducer,
      genres: genreReducer,
      details: detailsReducer,
      headerState: headerReducer,
      selectedCountry: countryrReducer,
      similar: similarReducer,
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [GenreGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';
import { CreateDeckComponent } from '../components/decksComponent/create-deck/create-deck.component';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/homeComponent/home/home.component';
import { DecksComponent } from '../components/decksComponent/decks/decks.component';
import { DisplayDeckComponent } from '../components/decksComponent/display-deck/display-deck.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'criar', component: CreateDeckComponent },
  { path: 'decks', component: DisplayDeckComponent },
];

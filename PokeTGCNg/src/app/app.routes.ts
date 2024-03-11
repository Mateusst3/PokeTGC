import { Routes } from '@angular/router';
import { CreateDeckComponent } from '../components/decksComponent/create-deck/create-deck.component';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/homeComponent/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'criar', component: CreateDeckComponent },
];

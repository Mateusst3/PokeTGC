import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { get } from '../utils/ApiFetch';
import { PokemonCardInterface } from '../types/interfaces/PokemonCardInterface';
import { PokemonCardsFetchDataInterface } from '../types/interfaces/PokemonCardsFetchDataInterface';
import { PokemonCardComponent } from '../components/pokemonCards/pokemon-card/pokemon-card.component';
import { NavBarComponent } from '../components/navBar/nav-bar/nav-bar.component';
import { IgxGridModule, IgxProgressBarModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { FavoritesPokemonsComponent } from '../components/favoritesPokemonsComponent/favorites-pokemons/favorites-pokemons.component';
import { DecksComponent } from '../components/decksComponent/decks/decks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    NavBarComponent,
    PokemonCardComponent,
    IgxGridModule,
    CommonModule,
    FavoritesPokemonsComponent,
    IgxProgressBarModule,
    DecksComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'PokeTGCNg';
  
}

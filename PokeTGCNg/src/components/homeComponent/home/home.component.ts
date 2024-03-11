import { Component, OnInit } from '@angular/core';
import { PokemonCardInterface } from '../../../types/interfaces/PokemonCardInterface';
import { PokemonCardsFetchDataInterface } from '../../../types/interfaces/PokemonCardsFetchDataInterface';
import { get } from '../../../utils/ApiFetch';
import { PokemonCardComponent } from '../../pokemonCards/pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  ActivatedRoute,
} from '@angular/router';
import { IgxGridModule, IgxProgressBarModule } from 'igniteui-angular';
import { DecksComponent } from '../../decksComponent/decks/decks.component';
import { FavoritesPokemonsComponent } from '../../favoritesPokemonsComponent/favorites-pokemons/favorites-pokemons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    PokemonCardComponent,
    IgxGridModule,
    CommonModule,
    FavoritesPokemonsComponent,
    IgxProgressBarModule,
    DecksComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
  ],
})
export class HomeComponent implements OnInit {
  pokemonCardsProp: Array<PokemonCardInterface> | null = null;
  limit: number = 30;
  isFetching = true;

  
  isCardsList = true;
  isMyDeck = false;
  isFavoritesPokemons = false;

  queryParam: string | undefined
  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe((params: any) => {
      this.queryParam = params["q"]
    })
    this.getInitialOrder()
  }

  getInitialOrder = () => {
    this.isCardsList = this.queryParam == undefined || this.queryParam == "list"
    this.isMyDeck = this.queryParam != undefined && this.queryParam == "decks"
    this.isFavoritesPokemons = this.queryParam != undefined && this.queryParam == "favorites"
  }

  async ngOnInit(): Promise<void> {
    let dataFetched: PokemonCardsFetchDataInterface = await get(
      `cards?pageSize=${this.limit}`
    );
    this.pokemonCardsProp = dataFetched.data;
    this.isFetching = false;
  }

  changeLimit = async () => {
    this.isFetching = true;
    this.limit += 10;
    let dataFetched: PokemonCardsFetchDataInterface = await get(
      `cards?pageSize=${this.limit}`
    );
    this.pokemonCardsProp = dataFetched.data;
    this.isFetching = false;
  };




  changeSelectedBtn = (type: string) => {
    this.isCardsList = false;
    this.isMyDeck = false;
    this.isFavoritesPokemons = false;
    type == 'cards' && (this.isCardsList = true);
    type == 'deck' && (this.isMyDeck = true);
    type == 'favorites' && (this.isFavoritesPokemons = true);
  };
}

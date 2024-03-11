import { Component, OnInit } from '@angular/core';
import { FavoritesCardsInterface } from '../../../types/interfaces/FavoritesCardsInterface';
import { PokemonCardInterface } from '../../../types/interfaces/PokemonCardInterface';
import { get } from '../../../utils/ApiFetch';
import { PokemonCardComponent } from '../../pokemonCards/pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites-pokemons',
  standalone: true,
  templateUrl: './favorites-pokemons.component.html',
  styleUrl: './favorites-pokemons.component.scss',
  imports: [PokemonCardComponent, CommonModule],
})
export class FavoritesPokemonsComponent implements OnInit {
  public favoritesCards: Array<FavoritesCardsInterface> | null | string;
  public favoritesCardsAllDataFetched: Array<PokemonCardInterface>;
  private storage: Storage;
  ngOnInit(): void {}

  constructor() {
    this.storage = window.localStorage;
    this.favoritesCards = this.getFavoritesFromLocalStorage();
    this.favoritesCardsAllDataFetched = [];
    this.favoritesCards?.map(async (element: FavoritesCardsInterface) => {
      await get(`cards?q=id:${element.id}`).then((response: any) =>
        this.favoritesCardsAllDataFetched.push(response.data[0])
      );
    });
  }

  getFavoritesFromLocalStorage = (): Array<FavoritesCardsInterface> | null => {
    if (this.storage) {
      let dataBefore = this.storage.getItem('favorites');
      if (dataBefore) {
        return JSON.parse(dataBefore);
      }
    }
    return null;
  };
}

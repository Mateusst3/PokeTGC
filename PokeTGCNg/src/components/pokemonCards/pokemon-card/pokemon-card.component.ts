import {
  Component,
  Inject,
  Injectable,
  Input,
  OnInit,
  input,
} from '@angular/core';
import { PokemonCardInterface } from '../../../types/interfaces/PokemonCardInterface';
import { IgxIconComponent } from 'igniteui-angular';
import { FavoritesCardsInterface } from '../../../types/interfaces/FavoritesCardsInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [IgxIconComponent, CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent implements OnInit {
  private storage: Storage;
  public isFavorite: boolean;
  public isHovering: boolean = false;
  public checked: boolean = false
  @Input() isSelectCard!: boolean;
  @Input() cardData!: PokemonCardInterface;
  @Input() add2Arr: ((args: PokemonCardInterface, isPlus: boolean) => any) | undefined;
  ngOnInit(): void {
    if (this.storage) {
      let favoriteItems: null | string = this.storage.getItem('favorites');
      if (favoriteItems) {
        let arr: Array<FavoritesCardsInterface> = JSON.parse(favoriteItems);
        this.isFavorite =
          arr.filter((element: FavoritesCardsInterface) => {
            return element.id == this.cardData.id;
          }).length > 0;
      }
    }
  }
  constructor() {
    this.storage = window.localStorage;
    this.isFavorite = false;
  }

  putOnFavorite = () => {
    if (this.storage) {
      let favoritesPokemons = this.storage.getItem('favorites');
      let data2SaveAtLocalStorage = {
        id: this.cardData.id,
        name: this.cardData.name,
        image: this.cardData.images.small,
      };
      if (favoritesPokemons == null) {
        this.storage.setItem(
          'favorites',
          JSON.stringify([data2SaveAtLocalStorage])
        );
        this.isFavorite = true;
      } else {
        let favoritesArr: Array<FavoritesCardsInterface> =
          JSON.parse(favoritesPokemons);
        let concatedArr = favoritesArr.concat(data2SaveAtLocalStorage);
        this.storage.setItem('favorites', JSON.stringify(concatedArr));
        this.isFavorite = true;
      }
      return true;
    }
    return false;
  };

  removeFromFavorite = () => {
    if (this.storage) {
      let favoritesPokemons = this.storage.getItem('favorites');
      if (favoritesPokemons) {
        let favoritesArr: Array<FavoritesCardsInterface> =
          JSON.parse(favoritesPokemons);

        this.storage.setItem(
          'favorites',
          JSON.stringify(
            favoritesArr.filter((element: FavoritesCardsInterface) => {
              return element.id != this.cardData.id;
            })
          )
        );
        this.isFavorite = true;

        return true;
      }
    }
    return false;
  };
}

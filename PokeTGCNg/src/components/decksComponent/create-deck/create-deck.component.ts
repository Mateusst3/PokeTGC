import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IgxButtonModule,
  IgxIconComponent,
  IgxIconModule,
  IgxNavbarModule,
  IgxProgressBarModule,
} from 'igniteui-angular';
import { PokemonCardInterface } from '../../../types/interfaces/PokemonCardInterface';
import { PokemonCardsFetchDataInterface } from '../../../types/interfaces/PokemonCardsFetchDataInterface';
import { get } from '../../../utils/ApiFetch';
import { PokemonCardComponent } from '../../pokemonCards/pokemon-card/pokemon-card.component';
import { SelectedCardsComponent } from '../../selectedCards/selected-cards/selected-cards.component';
import { DeckInterface } from '../../../types/interfaces/DeckInterface';

@Component({
  selector: 'app-create-deck',
  standalone: true,
  imports: [
    IgxIconComponent,
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    CommonModule,
    IgxProgressBarModule,
    PokemonCardComponent,
    SelectedCardsComponent,
  ],
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.scss',
})
export class CreateDeckComponent implements OnInit {
  isHovering: boolean = false;
  inputName: string = '';
  nameSelected: string | null = null;
  isListSelected: boolean = true;
  isSearchSelected: boolean = false;
  pokemonCardsProp: Array<PokemonCardInterface> | null = null;
  limit: number = 30;
  isFetching = true;
  selectedCards: Array<PokemonCardInterface> = [];
  pokemonCardsSearch: Array<PokemonCardInterface> | null = null;
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  async ngOnInit(): Promise<void> {
    let dataFetched: PokemonCardsFetchDataInterface = await get(
      `cards?pageSize=${this.limit}`
    );
    this.pokemonCardsProp = dataFetched.data;
    this.isFetching = false;
  }
  changeMode(name: string) {
    if (name == 'list') {
      this.isListSelected = true;
      this.isSearchSelected = false;
    } else {
      this.isListSelected = false;
      this.isSearchSelected = true;
    }
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
  onInputMsg = (event: KeyboardEvent) => {
    this.inputName += (event.target as HTMLInputElement).value;
  };

  selectName = () => {
    this.nameSelected = this.inputName;
  };

  searchCard = async (event: KeyboardEvent) => {
    this.isFetching = true;
    let tg = event.target as HTMLInputElement;
    let dataFetched: PokemonCardsFetchDataInterface = await get(
      `cards?q=name:${tg.value}`
    );
    this.pokemonCardsSearch = dataFetched.data;
    this.isFetching = false;
  };

  createDeck = () => {
    if (
      this.selectedCards.length < 24 ||
      this.selectedCards.length > 60 ||
      !this.nameSelected
    ) {
      window.alert('O baralho deve ter entre 24 e 60 cartas');
    } else {
      let decksStr = this.storage.getItem('decks');
      let deckObj: DeckInterface = {
        name: this.nameSelected,
        cardsList: this.selectedCards,
      };
      if (decksStr) {
        let deckArr: Array<DeckInterface> = JSON.parse(decksStr);
        this.storage.setItem('decks', JSON.stringify(deckArr.concat(deckObj)));
      } else {
        this.storage.setItem('decks', JSON.stringify([deckObj]));
      }
    }
  };

  addSelectedCards = (element: PokemonCardInterface, isPlus: boolean) => {
    if (!isPlus) {
      if (
        this.selectedCards.filter(
          (el: PokemonCardInterface) => element.id == el.id
        ).length > 0
      ) {
        this.selectedCards = this.selectedCards.filter(
          (el: PokemonCardInterface) => element.id !== el.id
        );
      } else {
        if (
          this.selectedCards.filter((el: PokemonCardInterface) =>
            el.name.includes(element.name)
          ).length > 3
        ) {
          window.alert(
            'Você não pode adicionar mais de 4 pokemons no mesmo baralho com o mesmo nome!'
          );
          return;
        }
        this.selectedCards.push(element);
      }
    } else {
      if (
        this.selectedCards.filter((el: PokemonCardInterface) =>
          el.name.includes(element.name)
        ).length > 3
      ) {
        window.alert(
          'Você não pode adicionar mais de 4 pokemons no mesmo baralho com o mesmo nome!'
        );
        return;
      }
      this.selectedCards.push(element);
    }
  };

  getIsChecked = (id: string): boolean => {
    return (
      this.selectedCards.filter(
        (element: PokemonCardInterface) => element.id == id
      ).length > 0
    );
  };
}

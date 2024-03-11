import { Component, OnInit } from '@angular/core';
import { FavoritesCardsInterface } from '../../../types/interfaces/FavoritesCardsInterface';
import { PokemonCardInterface } from '../../../types/interfaces/PokemonCardInterface';
import { DeckInterface } from '../../../types/interfaces/DeckInterface';

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss',
})
export class DecksComponent implements OnInit {
  ngOnInit(): void {}
  decks: Array<DeckInterface> | null;
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
    this.decks = this.getDecks();
  }

  getDecks = (): Array<DeckInterface> | null => {
    if (this.storage) {
      let decksStr = this.storage.getItem('decks');
      if (decksStr) {
        return JSON.parse(decksStr);
      }
    }
    return null;
  };
}

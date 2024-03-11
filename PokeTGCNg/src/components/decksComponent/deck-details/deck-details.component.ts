import { Component, Input, OnInit } from '@angular/core';
import { DeckInterface } from '../../../types/interfaces/DeckInterface';
import { PokemonCardComponent } from '../../pokemonCards/pokemon-card/pokemon-card.component';
import { PokemonCardInterface } from '../../../types/interfaces/PokemonCardInterface';

@Component({
  selector: 'app-deck-details',
  standalone: true,
  imports: [],
  templateUrl: './deck-details.component.html',
  styleUrl: './deck-details.component.scss',
})
export class DeckDetailsComponent implements OnInit {
  @Input() deckArr: DeckInterface | undefined;
  pokemonsCards: number | undefined;
  otherCards: number | undefined;
  uniqueTypes: Array<string> = [];
  ngOnInit(): void {
    if (this.deckArr) {
      this.pokemonsCards = this.deckArr.cardsList.filter(
        (element: PokemonCardInterface) => element.supertype == 'Pokémon'
      ).length;
      this.otherCards = this.deckArr.cardsList.length - this.pokemonsCards;
      let allTypes: string[] = [];
      this.deckArr.cardsList.map((element: PokemonCardInterface) => {
        element.types.map((str) => {
          allTypes.push(str);
        });
      });
      console.log(allTypes);
      this.uniqueTypes = [...new Set(allTypes)];
      console.log(this.uniqueTypes);
    }
  }
  constructor() {}

  isOpen: boolean = false;
}

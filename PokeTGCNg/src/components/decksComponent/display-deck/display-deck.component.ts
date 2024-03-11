import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckInterface } from '../../../types/interfaces/DeckInterface';
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxButtonModule,
} from 'igniteui-angular';
import { PokemonCardComponent } from '../../pokemonCards/pokemon-card/pokemon-card.component';
import { PokemonCardInterface } from '../../../types/interfaces/PokemonCardInterface';
import { DeckDetailsComponent } from '../deck-details/deck-details.component';

@Component({
  selector: 'app-display-deck',
  standalone: true,
  templateUrl: './display-deck.component.html',
  styleUrl: './display-deck.component.scss',
  imports: [
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    PokemonCardComponent,
    DeckDetailsComponent,
  ],
})
export class DisplayDeckComponent implements OnInit {
  deckNmb: number | undefined;
  deck: DeckInterface | undefined;
  allDecks: Array<DeckInterface> = [];
  isOpenNewName: boolean = false;
  name2Chaneg: string = '';
  private storage: Storage;
  ngOnInit(): void {}

  constructor(private route: ActivatedRoute) {
    this.storage = window.localStorage;
    this.route.queryParams.subscribe((params: any) => {
      this.deckNmb = parseInt(params['deck']);
      let strDecks = this.storage.getItem('decks');
      if (strDecks && this.deckNmb) {
        this.allDecks = JSON.parse(strDecks);
        this.deck = this.allDecks.filter(
          (element: DeckInterface) => element.id == this.deckNmb
        )[0];
      }
    });
  }

  deleteItems = (element: PokemonCardInterface) => {
    if (this.deck) {
      let cards2Remove: Array<PokemonCardInterface> =
        this.deck?.cardsList.filter(
          (el: PokemonCardInterface) => el.id != element.id
        );
      if (cards2Remove.length >= 24 && cards2Remove.length <= 60) {
        this.allDecks = this.allDecks.filter(
          (element: DeckInterface) => element.id != this.deck?.id
        );
        this.deck.cardsList = cards2Remove;
        this.allDecks.push(this.deck);
        this.storage.setItem('decks', JSON.stringify(this.allDecks));
      } else {
        window.alert(
          'Você não pode fazer isso! O baralho precisa ter de 24 a 60 cartas'
        );
      }
    }
  };

  editName(event: any) {
    this.name2Chaneg = event.target.value;
  }

  changeName() {
    if (this.deck) {
      this.allDecks = this.allDecks.filter(
        (element: DeckInterface) => element.id != this.deck?.id
      );
      this.deck.name = this.name2Chaneg;
      this.allDecks.push(this.deck);
      this.storage.setItem('decks', JSON.stringify(this.allDecks));
    }
  }

  deleteDeck() {
    if (this.deck) {
      this.allDecks = this.allDecks.filter(
        (element: DeckInterface) => element.id != this.deck?.id
      );
      this.storage.setItem('decks', JSON.stringify(this.allDecks));
      window.location.href = "/?q=decks"
    }
  }
}

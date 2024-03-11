import { Component, Input, OnInit } from '@angular/core';
import { PokemonCardInterface } from '../../../types/interfaces/PokemonCardInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-cards.component.html',
  styleUrl: './selected-cards.component.scss',
})
export class SelectedCardsComponent implements OnInit {
  @Input() selectedCards!: Array<PokemonCardInterface>;
  isOpen: any = false;
  isHovering: boolean = false;
  ngOnInit(): void {}
  removeFromArr(id: string) {
    this.selectedCards = this.selectedCards.filter(
      (element: PokemonCardInterface) => element.id != id
    );
  }
}

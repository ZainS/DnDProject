import {Component, Input} from '@angular/core';
import {Spell} from '../spell';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
@Component({
  selector: 'app-spell-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent
  ],
  templateUrl: './spell-card.html',
  styleUrl: './spell-card.css'
})



export class SpellCard {
  @Input() spell!: Spell;
  frontFace = true;

  onMouseEnter(): void {
    this.frontFace = false;
  }

  onMouseLeave(): void {
    this.frontFace = true;
  }
}

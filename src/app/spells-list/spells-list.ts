import {Component, effect, inject} from '@angular/core';
import {SpellsApi} from '../services/spells-api';
import {SpellCard} from '../spell-card/spell-card';

@Component({
  selector: 'app-spells-list',
  imports: [
    SpellCard
  ],
  templateUrl: './spells-list.html',
  styleUrl: './spells-list.css'
})
export class SpellsList {

  spellService = inject(SpellsApi)

  spellList: any[] | undefined;

  constructor() {
    this.spellService.getAllSpellDetails().subscribe((results: any)=> this.spellList = results);
  }

}

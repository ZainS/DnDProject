import {Component, inject} from '@angular/core';
import {SpellsApi} from '../services/spells-api';
import {SpellCard} from '../spell-card/spell-card';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spells-list',
  imports: [
    SpellCard,
    MatProgressSpinner
  ],
  templateUrl: './spells-list.html',
  styleUrl: './spells-list.css'
})
export class SpellsList {

  spellService = inject(SpellsApi)

  spellList: any[] | undefined;

  loading: boolean;

  constructor() {
    this.loading = true;
    console.log('Fetching spell list...', this.loading);
    this.spellService.getAllSpellDetails().subscribe((results: any) => {
      this.spellList = results;
      this.loading = false;
      console.log('should be false: ',this.loading);
    });
  }

}

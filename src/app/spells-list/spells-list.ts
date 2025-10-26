import {Component, inject} from '@angular/core';
import {SpellsApi} from '../services/spells-api';
import {SpellCard} from '../spell-card/spell-card';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput, MatLabel} from '@angular/material/input';
import {FilterSpellSearchPipe} from '../utils/filter-search-pipe';

@Component({
  selector: 'app-spells-list',
  imports: [
    SpellCard,
    MatProgressSpinner,
    MatFormField,
    FormsModule,
    MatInput,
    MatLabel,
    FilterSpellSearchPipe
  ],
  templateUrl: './spells-list.html',
  styleUrl: './spells-list.css'
})
export class SpellsList {

  spellService = inject(SpellsApi)
  spellList: any[] | undefined;
  searchSpell: string = '';
  loading: boolean;

  constructor() {
    this.loading = true;
    this.spellService.getAllSpellDetails().subscribe((results: any) => {
      this.spellList = results;
      this.loading = false;
    });
  }

}

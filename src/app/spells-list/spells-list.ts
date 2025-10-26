import {Component, inject} from '@angular/core';
import {SpellsApi} from '../services/spells-api';
import {SpellCard} from '../spell-card/spell-card';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput, MatLabel} from '@angular/material/input';
import {FilterSpellSearchPipe} from '../utils/filter-spell-search-pipe';
import {MatOption, MatSelect, MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-spells-list',
  imports: [
    SpellCard,
    MatProgressSpinner,
    MatFormField,
    FormsModule,
    MatInput,
    MatLabel,
    FilterSpellSearchPipe,
    MatSelect,
    MatOption,
    MatOption,
  ],
  templateUrl: './spells-list.html',
  styleUrl: './spells-list.css'
})
export class SpellsList {

  spellService = inject(SpellsApi)
  fullSpellList: any[] | undefined;
  spellList: any[] | undefined;
  searchSpell: string = '';
  loading: boolean;
  selectedLevels: number[] = [];

  constructor() {
    this.loading = true;
    this.spellService.getAllSpellDetails().subscribe((results: any) => {
      this.fullSpellList = results;
      this.spellList = this.fullSpellList;
      this.loading = false;
    });
  }

  getSpellByLevel(levels: MatSelectChange) {
    if (this.selectedLevels.length === 0) {
      this.spellList = this.fullSpellList;
      return this.spellList;
    }
    this.spellList = this.fullSpellList?.filter(spell => this.selectedLevels.includes(spell.level));
    return this.spellList;
  }

}

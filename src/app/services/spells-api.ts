import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpellsList} from '../spells-list/spells-list';
import {forkJoin, Observable, switchMap} from 'rxjs';
import {Spell} from '../spell';

@Injectable({
  providedIn: 'root'
})
export class SpellsApi {
  private apiUrl = "https://www.dnd5eapi.co/api/2014";
  private http = inject(HttpClient);

  getAllSpells()  {
    return this.http.get(`${this.apiUrl}/spells`)
  }

  getSpellDetails(index: string) {
    return this.http.get(`${this.apiUrl}/spells/${index}`);
  }

  getAllSpellDetails(){
    return this.getAllSpells().pipe(
      switchMap((data: any) => {
        // Limit to first 10 spells to avoid too many requests
        const limitedResults = data.results.slice(0, 10);
        const requests = limitedResults.map((spell: any) =>
          this.getSpellDetails(spell.index)
        );
        return forkJoin(requests);
      })
    );
  }

}

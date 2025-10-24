import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concatMap, delay, forkJoin, from, Observable, reduce, switchMap} from 'rxjs';

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

  /**
   * Fetches the list of spells and then loads full details for every spell in controlled batches.
   *
   * Behavior:
   *  - Calls `getAllSpells()` to retrieve the index list.
   *  - Splits the `results` array into chunks of `chunkSize`.
   *  - Processes each chunk sequentially (one batch after another).
   *  - Within a chunk, requests all spell details in parallel via `forkJoin`.
   *  - Applies a `delayMs` pause after each batch.
   *  - Accumulates all batch results into a single array and emits it.
   *
   * @returns {Observable<any[]>} Observable that emits an array of spell detail objects.
   */
  getAllSpellDetails(): Observable<any[]>{
    return this.getAllSpells().pipe(
      switchMap((data: any) => {
        const results = data.results || [];
        const chunkSize = 10;
        const delayMs = 300; // adjust delay between batches as needed

        const chunks: any[][] = [];
        for (let i = 0; i < results.length; i += chunkSize) {
          chunks.push(results.slice(i, i + chunkSize));
        }

        return from(chunks).pipe(
          // process each chunk sequentially
          concatMap((chunk) =>
            forkJoin(chunk.map((spell: any) => this.getSpellDetails(spell.index))).pipe(
              // delay between batches
              delay(delayMs)
            )
          ),
          // accumulate all batches into a single array
          reduce((acc: any[], batch: any[]) => acc.concat(batch), [])
        );
      })
    );
  }

}

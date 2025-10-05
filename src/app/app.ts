import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SpellsList} from './spells-list/spells-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpellsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DnDProject');
}

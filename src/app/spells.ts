import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Spells {

  private apiUrl = "https://www.dnd5eapi.co";

  constructor(private http: HttpClient) { }



}

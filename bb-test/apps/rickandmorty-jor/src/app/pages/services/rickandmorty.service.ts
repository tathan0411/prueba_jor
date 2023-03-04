import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { characters } from '../models/characters.model';
import { response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  URL = "https://rickandmortyapi.com/api/";

  constructor(private http: HttpClient) { }

  getCharacter(filter: string): Observable<response<characters[]>> {
    return this.http.get<response<characters[]>>(`${this.URL}character/?name=${filter == '' ? '' : filter}`);
  }

}

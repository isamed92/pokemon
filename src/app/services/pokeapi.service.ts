import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  url: string = 'https://pokeapi.co/api/v2/'

  constructor(
    private http: HttpClient
  ) { }


  getPokeInfo(pokemonName?: string, pokemonID?: number){
    let url = '';
    if(pokemonID){
      url = this.url + `pokemon/${pokemonID}`;
    } else {
      if(pokemonName){
        url = this.url + `pokemon/${pokemonName}`;
      }
    }
    return this.http.get(url).pipe(map((pokemon: Pokemon) => {
      // console.log(pokemon);
      return pokemon;

    }));
  }
}

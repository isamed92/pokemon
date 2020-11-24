import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: []
})
export class PadreComponent implements OnInit {

  pokemon: Pokemon = new Pokemon();

  constructor(public _pokeService: PokeapiService) {
  }

  ngOnInit() {
    this.getPokemon();
  }



  getPokemon(){
    return this._pokeService.getPokeInfo(null, 639).subscribe(
      data => {
        this.pokemon = data;
        console.log(this.pokemon);
      }
    );
  }



}

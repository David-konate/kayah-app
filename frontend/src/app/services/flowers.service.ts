import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Flower } from '../models/Flower.model';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';


@Injectable({
    providedIn: 'root'
  })
  export class StuffService {
  
    constructor(private http: HttpClient) {} 

    private flowers: Flower[] = [
        {
            _id: '1',
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            variete: 'sk',      
          },
          {
            _id: '2',
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            variete: 'sak'      
          },
          {
            _id: '3',
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            variete: 'zsk'      
          },
          {
            _id: '4',
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            variete: 'sdk'      
          } 
    ];

    public flowers$ = new Subject<Flower[]>();

}
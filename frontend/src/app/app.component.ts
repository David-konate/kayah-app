
import { Flower } from './models/Flower.model';
import { FLOWERS } from 'src/mock-flower';

import { Component, OnDestroy, OnInit } from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit  {

 public flowers: Flower[];
 public title: string = "Liste de fleurs";




  ngOnInit() {
    this.flowers = FLOWERS;
    console.log(this.flowers)
  }

  selectFlower(flower: Flower) {
    alert("Vous avez cliqué sur " + flower.variete)
  }
}
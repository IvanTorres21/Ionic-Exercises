import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio8',
  templateUrl: './ejercicio8.page.html',
  styleUrls: ['./ejercicio8.page.scss'],
})
export class Ejercicio8Page implements OnInit {

  min: number;
  max: number;
  rand: number;
  
  constructor() { }

  ngOnInit() {
  }

  randNumb(){

    this.rand = +this.min + Math.floor((Math.random() * (this.max-this.min+1)));
  }

  changeNum(){

    if (this.rand != this.min || this.rand === this.max) this.rand = this.min;
    else if (this.rand === this.min) this.rand = this.max;
  }1

}

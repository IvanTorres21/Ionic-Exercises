import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.page.html',
  styleUrls: ['./ejercicio7.page.scss'],
})
export class Ejercicio7Page implements OnInit {

  pes: number;
  eur: number;

  constructor() { }

  ngOnInit() {
  }

  change(opt: number){

    if(opt == 1){
      this.eur = this.pes / 166.386;
    } else if(opt == 2){

      this.pes = this.eur * 166.386;
    }
  }
}

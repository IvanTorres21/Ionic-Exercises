import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {


  number: number = 0;
  constructor() { }

  ngOnInit() {
  }

  changeNumber(n: number){

    if(n == 0){
      this.number = 0;
    } else {

      this.number += n;
    }
  }
}

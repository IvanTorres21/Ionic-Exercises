import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio9',
  templateUrl: './ejercicio9.page.html',
  styleUrls: ['./ejercicio9.page.scss'],
})
export class Ejercicio9Page implements OnInit {
  // 1 pulgada = 2.54 centímetros = 0.0254 metros

  m: number;
  cm: number;
  in: number;

  constructor() { }

  ngOnInit() {
  }

  change(opt: number){

    if (opt == 1) {
        
      this.m = this.cm / 100;
      this.in = this.cm * 2.54;
    } else if (opt == 2){

      this.cm = this.m * 100;
      this.in = this.cm * 2.54;
    } else {

      this.cm = this.in / 2.54;
      this.m = this.cm / 100;
    }
  }
}

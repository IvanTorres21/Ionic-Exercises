import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {


  nombre: string;
  shown: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  mostrarNombre(){

    this.nombre = "Ivan"
    this.shown = true;
  }
  ocultarNombre(){
    this.nombre = "";
    this.shown = false;
  }
}

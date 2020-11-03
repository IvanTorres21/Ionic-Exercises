import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
})
export class Ejercicio1Page implements OnInit {

  nombre: string;
  constructor() { }

  ngOnInit() {
  }

  mostrarNombre(){

    this.nombre = "Ivan"
  }
  ocultarNombre(){
    this.nombre = "";
  }
}

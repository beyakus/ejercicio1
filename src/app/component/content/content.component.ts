import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrar:Object[] = [
    { nombre:"Tarjeta 1", descripcion:"Esto eslo que debe mostrarse én mi tarjeta 1", imagen:"./assets/img/zapato1.jpg" },
    { nombre:"tarjeta 2", descripcion:"Esto eslo que debe mostrarse én mi tarjeta 2", imagen:"./assets/img/zapato2.jpg" },
    { nombre:"tarjeta 3", descripcion:"Esto eslo que debe mostrarse én mi tarjeta 3", imagen:"./assets/img/zapato3.jpg" },
    { nombre:"tarjeta 4", descripcion:"Esto eslo que debe mostrarse én mi tarjeta 4", imagen:"./assets/img/zapato4.jpg" },
    { nombre:"tarjeta 5", descripcion:"Esto eslo que debe mostrarse én mi tarjeta 5", imagen:"./assets/img/zapato5.jpg" }
  ] 

}

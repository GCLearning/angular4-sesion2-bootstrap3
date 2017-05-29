import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  columnas = [
    'Nombre',
    'Apellido',
    'Edad',
    'Sexo'
  ]

  data = [
    [
      'Giancarlo',
      'Chiappe',
      27,
      'H'
    ],
    [
      'Jaime',
      'Pirca',
      25,
      'H'
    ],
    [
      'Rosa',
      'Paredes',
      25,
      'M'
    ]
  ]

  seleccionar(elemento) {
    alert('Elegiste el elemento: ' + elemento)
  }

}

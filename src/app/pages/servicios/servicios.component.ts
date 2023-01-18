import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  almacen = [
    [1, 'Casino de fresa', '120','35'],
    [2, 'Rellenitas', '1120','10'],
    [3, 'Morochas en taco', '120','35'],
    [4, 'CocoNut', '1120','10'],
    [5, 'Cua Cua', '120','35'],
    [6, 'Doña Pepa', '1120','10'],
    [7, 'Chupetin Colorado', '120','35'],
    [8, 'Pepsi', '1120','10'],
  ];

}

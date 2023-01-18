import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  
  alamcen = [
    [1, 'Casino de Fresa', 120.00,'35'],
    [2, 'Chocolate Triangulo', 120.00,'45'],
    [3, 'Cua Cua', 120.00,'10'],
    [4, 'Doña Pepa', 120.00,'13'],
    [5, 'Pepsi en lata', 120.00,'19'],
  ];

  constructor() { }
}

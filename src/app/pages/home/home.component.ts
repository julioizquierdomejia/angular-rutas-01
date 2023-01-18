import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = "John";
  lastName = "Lennon";
  age = '68';
  isLog = 'true';

  new_nombre = "";
  new_apellido!:string;
  new_edad!:string;



  guardarNombre(){

    localStorage.setItem('nombre', this.name);
    localStorage.setItem('apellido', this.lastName);
    localStorage.setItem('edad', this.age);
    localStorage.setItem('log', this.isLog);

  }

  mostrarDatos(){

    this.new_nombre = String(localStorage.getItem('nombre'));


  }
  

}

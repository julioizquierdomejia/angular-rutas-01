import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  ngOnInit(): void {
    LoginInicial();
  }

  posy = 10;

  name = "John";
  lastName = "Lennon";
  age = '68';
  isLog = 'true';

  new_nombre = "";
  new_apellido!:string;
  new_edad!:string;

  logeado!:string;



  guardarNombre(){

    localStorage.setItem('Mivalor', 'Este es mi valor');
    localStorage.setItem('nombre', this.name);
    localStorage.setItem('apellido', this.lastName);
    localStorage.setItem('edad', this.age);
    localStorage.setItem('estoyLogeado', this.isLog);

  }

  mostrarDatos(){

    this.new_nombre = String(localStorage.getItem('nombre'));

    this.logeado  = String(localStorage.getItem('estoyLogeado'));

  }
  
  new_user!:string;
  new_pass!:string;


}
function LoginInicial() {
  localStorage.setItem('user', 'user@gmail.com');
  localStorage.setItem('pass', '12345678');

}


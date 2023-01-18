import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/list/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit{


  input!:string[];

  constructor(private data:DataService){}

  ngOnInit(): void {
    //this.data.getAll().subscribe( data => console.log(data));
    this.data.getAll().subscribe( data => this.input = data);
  }

  saveNew(){
    //const nuevo = {email:'julio@gmail.com', password:'12345678'}
    const nuevo = {email:'julio@gmail.com'}
    this.data.addNewRegister(nuevo).subscribe(data => console.log(data));
  }

}

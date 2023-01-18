import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  id = "hola";
  
  constructor(private router:Router, private route:ActivatedRoute, dataService:DataService){

  }

  ngOnInit(): void {

    this.id = String(this.route.snapshot.paramMap.get('id'));

    //this.id = String(this.route.snapshot.paramMap.get('id'));
  }


}

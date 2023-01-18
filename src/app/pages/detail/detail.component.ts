import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  id = "hola";
  constructor(private router:Router, private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  goToDetalle(id:number){
    this.router.navigate(['/detalle', id]);
  }

}

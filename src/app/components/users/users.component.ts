import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
Number(arg0: string|number): number {
throw new Error('Method not implemented.');
}


  id = "hola";
  
  constructor(private router:Router, private route:ActivatedRoute, public dataService:DataService){
      
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  gotoUser(id:number){
    this.router.navigate(['/detalle',id])
  }


}

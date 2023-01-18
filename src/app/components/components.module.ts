import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DataService } from '../services/data.service';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class ComponentsModule { }

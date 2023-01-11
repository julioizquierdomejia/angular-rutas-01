import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactenosComponent } from './contactenos/contactenos.component';



@NgModule({
  declarations: [
    HomeComponent,
    ServiciosComponent,
    PortafolioComponent,
    ContactenosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

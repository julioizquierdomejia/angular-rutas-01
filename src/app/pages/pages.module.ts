import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { BreakingComponent } from './breaking/breaking.component';



@NgModule({
  declarations: [
    HomeComponent,
    ServiciosComponent,
    PortafolioComponent,
    ContactenosComponent,
    BreakingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ServiciosComponent,
    PortafolioComponent,
    ContactenosComponent,
    BreakingComponent
  ]
})
export class PagesModule { }

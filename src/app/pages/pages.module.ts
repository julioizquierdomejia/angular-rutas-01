import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { BreakingComponent } from './breaking/breaking.component';
import { WebComponent } from './web/web.component';
import { VideoComponent } from './video/video.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DataService } from '../services/data.service';



@NgModule({
  declarations: [
    HomeComponent,
    ServiciosComponent,
    PortafolioComponent,
    ContactenosComponent,
    BreakingComponent,
    WebComponent,
    VideoComponent,
    DetailComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
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

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
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';



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
    DetalleComponent,
    LoginComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule,
    

  ],

  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
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

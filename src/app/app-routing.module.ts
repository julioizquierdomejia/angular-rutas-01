import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { HomeComponent } from './pages/home/home.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'portafolio', component:PortafolioComponent},
  {path:'contactos', component:ContactenosComponent},
  {path:'404', component:BreakingComponent},
  {path:'**', redirectTo:'404', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

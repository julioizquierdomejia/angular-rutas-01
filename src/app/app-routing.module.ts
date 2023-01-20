import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { UsersComponent } from './components/users/users.component';
import { CheckLoginGuard } from './guard/check-login.guard';
import { PermisosGuard } from './guard/permisos.guard';
import { PermissionsGuard } from './guard/permissions.guard';
import { WithoutSaveGuard } from './guard/without-save.guard';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { VideoComponent } from './pages/video/video.component';
import { WebComponent } from './pages/web/web.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'contactos', component:ContactenosComponent},

  {path:'portafolio', component:PortafolioComponent,
    children:[
      {path:'web', component:WebComponent},
      {path:'video', component:VideoComponent}
    ]
  },

  {path:'usuarios', component:UsersComponent, canActivate:[PermisosGuard]},

  {path:'login', component:LoginComponent, canActivate:[CheckLoginGuard]},
  
  {path:'detalle/:id', component:DetalleComponent},
  {path:'lista', component:ListComponent, canDeactivate:[WithoutSaveGuard]},
  
  //{path:'detail/:id', component:DetailComponent},
  {path:'404', component:BreakingComponent},
  {path:'**', redirectTo:'404', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path: '', component: BarraSuperiorComponent},
  {path: 'caberero', component: CabeceroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

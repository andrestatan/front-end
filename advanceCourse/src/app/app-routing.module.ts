import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjustesComponent } from './ajustes/ajustes.component';
import { InicioComponent } from './inicio/inicio.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NoticiaCompletaComponent } from './noticia-completa/noticia-completa.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:"Inicio", component:InicioComponent},
  {path:"Ajustes", component:AjustesComponent},
  {path:"Mensajes", component:MensajesComponent},
  {path:"NoticiasCompletas", component:NoticiaCompletaComponent},
  {path:"Noticias", component:NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

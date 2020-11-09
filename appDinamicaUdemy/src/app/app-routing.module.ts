import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjustesComponent } from './ajustes/ajustes.component';
import { IncicioComponent } from './incicio/incicio.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { NoticiaCompletaComponent } from './noticia-completa/noticia-completa.component';
import { NoticiaComponent } from './noticia/noticia.component';

const routes: Routes = [
  {path:"Inicio", component:IncicioComponent},
  {path:"Noticias", component:NoticiaComponent},
  {path:"Mensajes", component:MensajeComponent},
  {path:"Noticia", component:NoticiaCompletaComponent},
  {path:"Ajustes", component:AjustesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

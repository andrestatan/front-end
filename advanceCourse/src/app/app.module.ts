import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { InicioComponent } from './inicio/inicio.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaCompletaComponent } from './noticia-completa/noticia-completa.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AjustesComponent,
    InicioComponent,
    MensajesComponent,
    NoticiasComponent,
    NoticiaCompletaComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

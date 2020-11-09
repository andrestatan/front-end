import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiaCompletaComponent } from './noticia-completa/noticia-completa.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { IncicioComponent } from './incicio/incicio.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    NoticiaCompletaComponent,
    MensajeComponent,
    IncicioComponent,
    AjustesComponent,
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiaCompletaComponent } from './noticia-completa/noticia-completa.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { IncicioComponent } from './incicio/incicio.component';
import { ModalComponent } from './incicio/modal/modal.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ModalsComponent } from './shared/modals/modals.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    NoticiaCompletaComponent,
    MensajeComponent,
    IncicioComponent,
    AjustesComponent,
    NavbarComponent,
    FooterComponent,
    ModalsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { ConsultaPersonasComponent } from './consulta-personas/consulta-personas.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraBusquedaComponent,
	EncabezadoComponent,
	IntroduccionComponent,
	ConsultaPersonasComponent,
	BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

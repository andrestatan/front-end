import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { ConsultaPersonasComponent } from './consulta-personas/consulta-personas.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { EliminacionComponent } from './eliminacion/eliminacion.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PopUpsComponent } from './pop-ups/pop-ups.component';
import { AdicionComponent } from './adicion/adicion.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraBusquedaComponent,
	EncabezadoComponent,
	IntroduccionComponent,
	ConsultaPersonasComponent,
	BienvenidoComponent,
	EliminacionComponent,
	ModificacionComponent,
	PiePaginaComponent,
	PopUpsComponent,
	AdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

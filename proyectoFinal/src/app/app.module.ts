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
import { PopUpsComponent } from './pop-ups/pop-ups.component';
import { AdicionComponent } from './adicion/adicion.component';
import { fechas } from './servicios/fechas.servicio.service';
import { FechasString } from './servicios/fechasString.service';
import { HttpClientModule } from '@angular/common/http';
import { DatosService } from './servicios/datos.servicio.service';
import { datosAtributos } from './model/datos.model';
import { TablaComponent } from './tabla/tabla.component';

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
	PopUpsComponent,
  AdicionComponent,
  TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [fechas,FechasString,DatosService,datosAtributos],
  bootstrap: [AppComponent]
})
export class AppModule { }

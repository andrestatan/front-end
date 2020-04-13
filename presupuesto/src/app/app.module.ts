import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { DatosBasicosComponent } from './datos-basicos/datos-basicos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    OpcionesComponent,
    IngresosComponent,
    EgresosComponent,
    DatosBasicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

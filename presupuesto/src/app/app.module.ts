import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { EgresosComponent } from './egresos/egresos.component';
import { IngresosComponent } from './ingresos/ingresos.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    EgresosComponent,
    IngresosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

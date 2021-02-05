import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { ValoresComponent } from './valores/valores.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { PresupuestoService } from './servicios/presupuesto.service';
import { IngresosService } from './servicios/ingresos.service';
import { EgresosService } from './servicios/egresos.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    ValoresComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PresupuestoService,IngresosService,EgresosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

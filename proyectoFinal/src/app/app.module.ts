import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { ConsultaPersonasComponent } from './consulta-personas/consulta-personas.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PopUpsComponent } from './pop-ups/pop-ups.component';
import { fechas } from './servicios/fechas.servicio.service';
import { FechasString } from './servicios/fechasString.service';
import { HttpClientModule } from '@angular/common/http';
import { DatosService } from './servicios/datos.servicio.service';
import { datosAtributos } from './model/datos.model';
import { TablaComponent } from './tabla/tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkColumnDef } from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { AlertasComponent } from './pop-ups/alertas/alertas.component'
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BarraBusquedaComponent,
	EncabezadoComponent,
	IntroduccionComponent,
	ConsultaPersonasComponent,
	BienvenidoComponent,
	PopUpsComponent,
  TablaComponent,
  AlertasComponent,
  PiePaginaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    FormsModule

  ],
  providers: [fechas,FechasString,DatosService,datosAtributos,CdkColumnDef,PopUpsComponent],
  bootstrap: [AppComponent],
  entryComponents: [PopUpsComponent,AlertasComponent],
})
export class AppModule { }

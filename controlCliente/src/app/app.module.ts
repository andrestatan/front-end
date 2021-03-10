import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    LoginComponent,
    RegistroComponent,
    ClientesComponent,
    TableroComponent,
    ConfiguracionComponent,
    PiePaginaComponent,
    EditarClienteComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

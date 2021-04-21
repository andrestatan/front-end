import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
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
import { ClienteService } from './Servicios/cliente.service';
import { LoginService } from './Servicios/login.service';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionService } from './Servicios/configuracion.service';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [ClienteService, LoginService, AuthGuard, ConfiguracionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

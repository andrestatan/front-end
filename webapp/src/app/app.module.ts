import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { personasComponent } from './Personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { calculadoraComponent } from './Calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent, 
    personasComponent,
    PersonaComponent,
    calculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, personasComponent, PersonaComponent,calculadoraComponent]
})
export class AppModule { }

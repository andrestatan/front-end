import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { personasComponent } from './Personas/personas.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent, 
    personasComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, personasComponent, PersonaComponent]
})
export class AppModule { }

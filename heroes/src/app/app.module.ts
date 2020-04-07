import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoHeroeComponent } from './listado-heroe/listado-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoHeroeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

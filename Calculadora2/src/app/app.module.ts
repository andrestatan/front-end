import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import  { FormsModule } from '@angular/forms';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

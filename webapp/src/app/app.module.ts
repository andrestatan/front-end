import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {videojuegos} from "./VideoGame/Video.component"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

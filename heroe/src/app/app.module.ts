import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HereComponent } from './heroe/here.component';
import { DataHeroeService } from './servicio/data-heroe.service';
import { VerMasComponent } from './ver-mas/ver-mas.component';
import { HeroComponent } from './hero/hero.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HereComponent,
    VerMasComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataHeroeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

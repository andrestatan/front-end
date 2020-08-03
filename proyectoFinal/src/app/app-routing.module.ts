import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { ConsultaPersonasComponent } from './consulta-personas/consulta-personas.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PopUpsComponent } from './pop-ups/pop-ups.component';


const routes: Routes = [
	{path: '',  component: BienvenidoComponent},
	{path: 'introduccion',  component: IntroduccionComponent},
	{path: 'consulta',  component: ConsultaPersonasComponent},
	{path: 'popup',  component: PopUpsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

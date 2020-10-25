import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HereComponent } from './heroe/here.component';
import { HomeComponent } from './home/home.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Heroe', component: HereComponent},
  {path: 'About', component: AboutComponent},
  {path: 'VerMas/:id', component: VerMasComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

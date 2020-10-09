import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HereComponent } from './here/here.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Heroe', component: HereComponent},
  {path: 'About', component: AboutComponent},

  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

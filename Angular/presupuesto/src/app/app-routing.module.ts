import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabeceroComponent } from './cabecero/cabecero.component';

const routes: Routes = [
  {path: '', component: CabeceroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

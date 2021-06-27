import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginGuardianService } from './login-guardian.service';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './personas/error/error.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';


const routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PersonasComponent, canActivate:[LoginGuardianService] },
  { path: 'personas', component: PersonasComponent, canActivate:[LoginGuardianService],
    children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent },
    ]
  },
  { path: '**', component: ErrorComponent },
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



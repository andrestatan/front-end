import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { configuracion } from 'src/app/modelo/configuracion.model';
import { ConfiguracionService } from 'src/app/Servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor(private router:Router, private configuracionservice: ConfiguracionService) { }
  
  permitirRegistro=false;

  ngOnInit(): void {
    this.configuracionservice.getConfiguracion().subscribe((configuracion : configuracion) => {
      this.permitirRegistro = configuracion.permitirRegistro;
    })
  }

  guardar(){
  let configuracion = {permitirRegistro: this.permitirRegistro};
  this.configuracionservice.modificarConfiguracion(configuracion);
  this.router.navigate(['/'])
  }

}

import { Egresos } from './../servicios/egresos.modal';
import { Ingresos } from './../servicios/ingresos.modal';
import { IngresosService } from './../servicios/ingresos.service';
import { EgresosService } from './../servicios/egresos.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild ("descripcion") descripcion:ElementRef;
  @ViewChild ("valor") valor:ElementRef;
  tipo:string="ingresos";
  constructor(private EgresosService:EgresosService, private IngresosService:IngresosService) {}

  ngOnInit() {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
    console.log(this.tipo)
  }


  agregarDatos(){
    if(this.tipo=="ingresos"){
       let ingress= new Ingresos(this.descripcion.nativeElement.value, this.valor.nativeElement.value)
       this.IngresosService.agregarIngresos(ingress);

    } else {
      let valor= new Egresos(this.descripcion.nativeElement.value, this.valor.nativeElement.value)
      this.EgresosService.adicionarEgreso(valor);
    }
  }
}

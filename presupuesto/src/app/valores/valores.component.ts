import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PresupuestoService } from '../servicios/presupuesto.service';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent implements OnInit {

  constructor(private _presupuesto:PresupuestoService) { }

  ngOnInit(): void {
  }

  @ViewChild ('descripcion') descripcion : ElementRef;
  @ViewChild ('valor') valor : ElementRef;
  @ViewChild ('operacion') operacion : ElementRef;

  obtencionData(){
    let desc= this.descripcion.nativeElement.value;
    let val = parseInt(this.valor.nativeElement.value);
    let op= this.operacion.nativeElement.value
    this._presupuesto.capturaDatos(op,desc,val)
  }
}

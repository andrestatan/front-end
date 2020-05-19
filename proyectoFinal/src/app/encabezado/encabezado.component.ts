import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css','../app.component.css']
})
export class EncabezadoComponent implements OnInit {

   ngOnInit(): void {
  }

titulo:string="Aplicacion Dummy"

}

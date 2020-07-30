import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css', '../app.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }
  @Input('arreglo') arreglo;
  @Input('encabezado') encabezado;
  columnasMostrar: any = ["userId", "id", "title", "completed"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {}

  verificacionData(){debugger;
    if(this.arreglo == undefined){
      window.alert("No se han cargado datos para la tabla")
    } else {
      this.arreglo.forEach(data => {
        debugger;
      });
    }
  }

}

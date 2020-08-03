import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { datosAtributos } from '../model/datos.model';
import { Data } from '@angular/router';
import { DatosService } from '../servicios/datos.servicio.service';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css', '../app.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private data:DatosService) {}
  @Input('arreglo') arreglo;
  @Input('encabezado') encabezado;
  columnasMostrar: any = ["userId", "id", "title", "body"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  datos;
  dataSource: MatTableDataSource <atributos>; 

  ngOnInit() { }

  ngOnChanges(): void {
    
 this. verificacionDatos()
    
  }

   verificacionDatos(){
     if(this.arreglo!= undefined){
    this.dataSource = new MatTableDataSource(this.arreglo);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }}
}
export interface atributos{
  userId: string;
  id: string;
  title: string;
  body: string;
}
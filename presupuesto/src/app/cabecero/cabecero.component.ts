import { Component, OnInit } from '@angular/core';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  constructor(private datos:DataService) { }

  ngOnInit(): void {
  }

}

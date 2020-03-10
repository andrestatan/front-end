import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  @Output () datos:number;

  constructor() { }

  ngOnInit(): void {
  }

}

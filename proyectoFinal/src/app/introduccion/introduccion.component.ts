import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css','../app.component.css']
})
export class IntroduccionComponent implements OnInit {
  titulo="Introduccion general";
  constructor() { }

  ngOnInit(): void {
  }

}

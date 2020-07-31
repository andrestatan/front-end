import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicion',
  templateUrl: './adicion.component.html',
  styleUrls: ['./adicion.component.css']
})
export class AdicionComponent implements OnInit {
  newUser="Agregar un nuevo Usuario"
  constructor() { }

  ngOnInit(): void {
  }

}

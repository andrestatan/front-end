import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { datos } from '../app.valor.component';
import { Validator } from '@angular/forms';



@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent implements OnInit {
  @Output() adicion= new EventEmitter<number>();
 @Input() numeroa:number;
  @Input() numerob:number;
resultado:number;

  ngOnInit(): void {

  }

  onsuma():void{
    this.resultado=this.numeroa+this.numerob;
    this.adicion.emit(this.resultado);

  }
  onresta(){
    this.resultado=this.numeroa-this.numerob;
    this.adicion.emit(this.resultado);
  }
  onMulti(){
    this.resultado=this.numeroa*this.numerob;
    this.adicion.emit(this.resultado);
  }
  onDivision(){
    this.resultado=this.numeroa/this.numerob;
    this.adicion.emit(this.resultado);

}
}

import { FechasString } from './fechasString.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class fechas {

    constructor(private _fechasString: FechasString) { }

    fechas = new Date;
    fechaFormateada;
    anio = this.fechas.getFullYear();
    dia = this.fechas.getDate();
    mes = this.fechas.getMonth();
    MesesConteoId;
    MesesConteoNombre;

    calcularDiaExacto() {
        let diaMes;
        let Dia;
        let diaDefinitivo;
        if (this.mes == 0 || this.mes == 2 || this.mes == 4 || this.mes == 6 || this.mes == 7 || this.mes == 9 || this.mes == 11) {
            diaMes = 31
        } else if(this.mes == 3 || this.mes == 5 || this.mes == 8 || this.mes == 10){
            diaMes=30
        } else if(this.mes == 1){
            diaMes=28
        }

        if (this.dia < 10){
            Dia =  "0" + this.dia;
        }
        return diaDefinitivo = (diaMes > this.dia)?Dia:diaMes;
    }

    getFechaActualString() {
        for(let a of this._fechasString.mesesString){
          if(this.mes === a.id ){
            this.fechaFormateada= this.calcularDiaExacto()+ " de " +a.nombre+" del "+this.anio;
        }    }
    return this.fechaFormateada;
    }

    getFechaActualNumero() {
        for(let a of this._fechasString.mesesString){
          if(this.mes === a.id ){
            this.fechaFormateada= this.calcularDiaExacto()+ " del " +a.id+" del "+this.anio;
        }    }
    return this.fechaFormateada;
    }
}
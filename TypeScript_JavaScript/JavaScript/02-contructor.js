function Persona (nombre, apellido, email){
this.nombre = nombre;
this.apellido = apellido;
this.email = email;
this.nombreCompleto = function(){
    return this.nombre +" "+ this.apellido;
}
}

Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez.com');
padre.tel = '66778899';
console.log(padre.tel);
console.log(padre.nombreCompleto());

let madre = new Persona('Lucia', 'Gonzales', 'pistera.com');
madre.tel = '3423423423';
console.log(madre.tel);
console.log(madre.nombreCompleto());

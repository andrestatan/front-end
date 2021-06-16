let persona1= {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function (titulo, telefono){
        return titulo +" "+this.nombre +" "+ this.apellido +" "+  telefono
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Gonzales',
};

//Uso de call para usar metodos de otros objetos

console.log(persona1.nombreCompleto('ingeniero','332211'));

console.log(persona1.nombreCompleto.call(persona2, 'Tecnologo', '66778899'));
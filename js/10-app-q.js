function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
//---------------------------------------------------------------------
// Cliente.prototype.tipoCliente = function(){
//     console.log('Desde mi nuevo proto!!!');
//     console.log(this.saldo);
// }

Cliente.prototype.tipoCliente = function(){

    let tipo

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum'; 
    }else{
        tipo = 'Normal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira){ // Proptotype que toma un valor
    this.saldo -= retira;
}
//---------------------------------------------------------------------
function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo); // Heredamos nombre y saldo!
    this.telefono = telefono;
}
//---------------------------------------------------------------------
Persona.prototype = Object.create(Cliente.prototype); //Heredamos las funciones 

Persona.prototype.constructor = Cliente; // Heredar ántes de instanciarlo
//---------------------------------------------------------------------
const juan = new Persona('Juan', 5000, 933145268); //Instanciarlo
console.log(juan);
//---------------------------------------------------------------------
console.log(juan);
console.log(juan.nombreClienteSaldo());
//---------------------------------------------------------------------
Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`
}
//---------------------------------------------------------------------
console.log(juan.mostrarTelefono());




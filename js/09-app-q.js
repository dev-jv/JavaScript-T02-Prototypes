function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
//---------------------------------------------------------------------
// Cliente.prototype.tipoCliente = function(){
//     console.log('Desde mi nuevo proto!!!');
//     console.log(this.saldo); // this.saldo devuelve el valor de saldo
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
const pedro = new Cliente('Pedro', 6000); // Instanciarlo
//---------------------------------------------------------------------
pedro.tipoCliente(); //Se llama como si fuera una método cualquiera
console.log(pedro.tipoCliente());// platinum
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000) 
console.log(pedro.nombreClienteSaldo());
// console.log(Pedro);




























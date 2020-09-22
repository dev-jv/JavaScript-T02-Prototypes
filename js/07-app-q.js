

//-------- Object Literal

const Cliente = {
    nombre: 'Juan',
    saldo: 500,
}

console.log(Cliente);

//-------- Object Constructor


function cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new cliente('Juan', 500);

console.log(juan);








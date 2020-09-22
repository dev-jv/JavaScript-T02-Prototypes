function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);

console.log(juan);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `el Cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(juan));
//---------------------------------------------------------------------
function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en Linea');

console.log(CCJ);

// console.log(formatearCliente(CCJ)); // FAIL corriendo...

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearEmpresa(CCJ));






























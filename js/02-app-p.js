//--------------------------------------------------------------------- JavaScript Prototype

function Person () {
    this.name = 'John',
    this.age = 23
}

let person = new Person(); 
console.log(Person.prototype); // { ... }
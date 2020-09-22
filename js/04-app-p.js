//--------------------------------------------------------------------- Changing Prototype

// constructor function
function Person() {
    this.name = 'John'
}

// add a property
Person.prototype.age = 20;

// creating an object
let person1 = new Person();

console.log(person1.age); // 20

// changing the property value of prototype
Person.prototype = { age: 50 }

// creating new object
let person3 = new Person();

console.log(person3.age); // 50
console.log(person1.age); // 20
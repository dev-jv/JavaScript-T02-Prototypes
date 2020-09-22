//--------------------------------------------------------------------- JavaScript Prototype Chaining

function Person() {
    this.name = 'John'
}

// adding property 
Person.prototype.name = 'Peter';
Person.prototype.age = 23

let person1 = new Person();

console.log(person1.name); // John
console.log(person1.age); // 23













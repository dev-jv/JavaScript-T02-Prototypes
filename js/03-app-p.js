//--------------------------------------------------------------------- Prototype Inheritance

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person1 = new Person();
let person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male'; // We have added a new property gender to the Person constructor function

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);






// objectConstructorName.prototype.key = 'value'; // The syntax to add the property to an object constructor function


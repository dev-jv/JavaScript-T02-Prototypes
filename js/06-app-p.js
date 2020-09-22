//--------------------------------------------------------------------- __proto__ 

function Person () {
    this.name = 'John'; // No olvides el (;)
}

// adding a prototype
Person.prototype.age = 24;

// creating object
let person = new Person();

// accessing prototype property
// console.log(Person.__proto__);   // { age: 24 } // Has been deprecated and you should avoid using that.
console.log(Person.prototype)



//--------------------------------------------------------------------- 


























'use strict';

// ================================================================================================================
// Constructor Functions and the new Operator
// ================================================================================================================
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function() {
  // console.log(2037 - this.birthYear);
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2017);

console.log(matilda, jack);

console.log(jonas instanceof Person);

// ================================================================================================================
// Prototypes
// ================================================================================================================
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// ================================================================================================================
// Prototypal Inheritance on Built-In objects
// ================================================================================================================
console.log('====Prototypal Inheritance on Built-In objects====');

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);
*/

// ================================================================================================================
// ES6 Classes
// ================================================================================================================

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // Methods will be added to .prototype property
  calcage() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hello() {
    console.log('Hello 📞');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcage();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

console.log(jessica.age);

const walter = new PersonCl('Walter White', 1965);

// ================================================================================================================
// Getters and Setters
// ================================================================================================================

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  // returns a value
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // requires exactly 1 parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

// Called as a property
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// ================================================================================================================
// Static Methods
// ================================================================================================================

PersonCl.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

PersonCl.hey();
PersonCl.hello();

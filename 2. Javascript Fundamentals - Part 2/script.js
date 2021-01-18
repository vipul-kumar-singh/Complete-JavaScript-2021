// ================================================================================================================
// Using strict mode
// ================================================================================================================
/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;

if(hasDriversLicense)
console.log('I can drive!');

//reserved strict keywords
const interface = 'Audio';
const private = 534;
*/


// ================================================================================================================
// Functions
// ================================================================================================================
/*
function logger() {
    console.log('My name is Jonas');
}
  
// calling / running / invoking function
logger();
logger();
logger();


// Parameters
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    //return value
    return juice;
}
  
//Arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
 
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Built-In Functions
const num = Number('23');

//example
function add(value1, value2){
    return value1 + value2;
}

const concatString = add('Hello ', 'World');
const addNum = add(5,6);

console.log(concatString, addNum);
*/


// ================================================================================================================
// Function Declarations vs Expressions
// ================================================================================================================
/*
// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);
  
// Function expression
const calcAge2 = function (birthYeah) { //Use of Anonymous function
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);
  
console.log(age1, age2);
*/

// ================================================================================================================
// Arrow Functions
// ================================================================================================================
/*
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYeah;
}

//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
  
console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
*/


// ================================================================================================================
// Functions Calling Other Functions
// ================================================================================================================
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/


// ================================================================================================================
// Arrays
// ================================================================================================================

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Initializing #1
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Initializing #2
const y = new Array(1991, 1984, 2008, 2020);

// Accessing elements
console.log(friends[0]);
console.log(friends[2]);

// Properties of arrays
console.log(friends.length);

friends[2] = 'Jay';
console.log(friends);

//Heterogenous Array
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, true, friends];
console.log(jonas);
*/


// ================================================================================================================
// Basic Array Operations (Methods)
// ================================================================================================================
/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// push -> add element to end of array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// unshift -> add element to beginning of array
friends.unshift('John');
console.log(friends);

// pop -> removes an element from the end of array
const popped = friends.pop();
console.log(popped);

// shift -> removes an element from the beginning of array
friends.shift();
console.log(friends);

// indexOf -> returns index of element, else returns -1
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// incudes -> returns true if element found in an array, else returns false
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// includes uses strict equality
friends.push(23);
console.log(friends.includes('23'));
console.log(friends.indexOf('23'));
*/

// ================================================================================================================
// Introduction to Objects
// ================================================================================================================
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
*/

// ================================================================================================================
// Dot vs Bracket Annotation
// ================================================================================================================
/*
const vipul = {
    firstName: 'Vipul',
    lastName: 'Kumar',
    age: 2021 - 1996,
    job: 'CEO',
    friends: ['CJ', 'Surya', 'Ghoshit']
};
console.log(vipul);

console.log(vipul.lastName);
console.log(vipul['lastName']);

const nameKey = 'Name';
console.log(vipul['first' + nameKey]);
console.log(vipul['last' + nameKey]);

console.log(`${vipul.firstName} has ${vipul.friends.length} friends, and his best friend is called ${vipul.friends[0]}`);
*/


// ================================================================================================================
// Object Methods
// ================================================================================================================
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    },

    //use of this keyword
    calcAge1: function () {
        return 2037 - this.birthYear;
    },

    setAge: function(age){
        this.age = age;
    },

    toString: function () {
        return `${this.firstName} is a ${this.calcAge1()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

}

console.log(jonas.calcAge(1995));
console.log(jonas.calcAge1());

// updattion in objects
jonas.firstName = 'Vipul';
console.log(jonas);

jonas.setAge(23);
console.log(jonas);

console.log(jonas.toString());
*/


// ================================================================================================================
// For Loop
// ================================================================================================================

for(let i = 0 ; i< 10; i++){
    console.log(`Lifting weights repitition ${i+1} 🏋️‍♂️`);
}
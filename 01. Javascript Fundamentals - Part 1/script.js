// ================================================================================================================
// Linking Javascript file 
// ================================================================================================================
/*
let js = 'amazing';
if (js === 'amazing')
    alert('javascript is fun');

console.log(40 + 8 + 23 - 10);
*/

// ================================================================================================================
// Values and variables
// ================================================================================================================
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// variable name can only contain letters, numbers, underscore and dollar sign
// variable name cannot be any reserved keyword
// variable name cannot start from number
let firstName = "Jonas";
let PI = 3.14;
let jonal_matilda = "JM";
let $function = 27;
let _hello = "underscore_hello";

console.log(firstName);
console.log($function);

// ---------------------------------------------------------------------------
// Assignment #1
// ---------------------------------------------------------------------------

let country = "India";
let continent = "Asia";
let population = 9876543210;

console.log(country);
console.log(continent);
console.log(population);
*/


// ================================================================================================================
// Data Types
// ================================================================================================================
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

console.log(typeof true);
console.log(typeof 23); 
console.log(typeof 'Jonas'); 

// Dynamic typing
javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

// undefined type
let year;
console.log(year);
console.log(typeof year);

// object type - a exception/bug in javascript
console.log(typeof null); 
*/

// ================================================================================================================
// let, const and var
// ================================================================================================================
/*
let age = 30;
age = 31; // reassigning/mutating

const birthYear = 1991;
// birthYear = 1990; // does not mutate

var hello = 'hello';
hello = true;

lastName = "Kumar";
*/

// ================================================================================================================
// Basic Operators
// ================================================================================================================
/*
// 1. Arithmetic operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);
console.log(ageJonas*2, ageJonas/10, 2**3); // 2**3 mean 2 to the power 3

const firstname = "Vipul";
const lastname = "Kumar";

console.log(firstname + " " + lastname);

// 2. Assignment Operators
let x = 10;
x += 5;

console.log(x);
console.log(x++);
console.log(++x);   

// 3. Comparison Operators

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 < now - 2018);
*/

// ================================================================================================================
// Operator Precedence
// ================================================================================================================
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 < now - 2018);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);
*/

// ================================================================================================================
// Strings and Template Literals
// ================================================================================================================
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// Normal String
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// Template Literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

const newLineString = 'This is \n a new Line';
console.log(newLineString);

const newLineTemplate = `This is 
another new line`;
console.log(newLineTemplate);
*/


// ================================================================================================================
// If else statements
// ================================================================================================================
/*
const age = 19;

const isOldEnough = age >= 18;

if(age < 0){
    console.log('Let Sarah born first');
} else if(isOldEnough){
    console.log("Sarah can start driving license 🚗")
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years.`);
}
*/

// ================================================================================================================
// Type Conversion and Coercion
// ================================================================================================================
/*
//Type Conversion
const inputYear = '1996';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(19) + String(96));

//Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('10' * '23');
console.log('23' > '19');
console.log(2+3+4+'5');
console.log('10'-'4'-'3'-2+'5');
*/

// ================================================================================================================
// Truthy and Falsy Values
// ================================================================================================================
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

//Type coercion
const money = 0;
if(money){
    console.log('Good');
} else {
    console.log('Empty');
}

let height;
if(height)
    console.log('Height is defined');
else
    console.log('Height is undefined');

height = 0;
if(height)
    console.log('Height is defined');
else
    console.log('Height is undefined');
*/


// ================================================================================================================
// Equality Operators
// ================================================================================================================
/*
// Strict Equality
console.log(18 === 18);
console.log('18' === 18);

console.log('18' !== 18);

// Loose Equality
console.log(18 == 18);
console.log('18' == 18);

console.log('18' != 18);
*/

// ================================================================================================================
// Prompt
// ================================================================================================================
/*
const age = prompt("What is your age?");
console.log(age);
console.log(typeof age);

//default input
const favourite = prompt("What is your favourite programming language?" , "Javascript");
console.log(favourite);
*/


// ================================================================================================================
// Logical Operators
// ================================================================================================================
/*
const trueValue = true;
const falseValue = false;

//AND
console.log(trueValue && trueValue);
console.log(trueValue && falseValue);
console.log(falseValue && trueValue);
console.log(falseValue && falseValue);

//OR
console.log(trueValue || trueValue);
console.log(trueValue || falseValue);
console.log(falseValue || trueValue);
console.log(falseValue || falseValue);

//NOT
console.log(!trueValue);
console.log(!falseValue);
*/


// ================================================================================================================
// Switch statement
// ================================================================================================================
/*
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
*/


// ================================================================================================================
// Conditional(Ternary) Operator
// ================================================================================================================

const age = 23;

console.log(23 >= 18 ? 'I like to drink wine 🍷' : ' I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);
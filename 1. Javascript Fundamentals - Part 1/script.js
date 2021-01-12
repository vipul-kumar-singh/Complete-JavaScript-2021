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

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 < now - 2018);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);
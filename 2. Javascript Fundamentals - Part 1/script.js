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
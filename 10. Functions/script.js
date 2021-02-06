'use strict';

// ================================================================================================================
// Default Parameters
// ================================================================================================================
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 398);
createBooking('LH123', 5);
*/

// ================================================================================================================
// Passing Arguments : Value vs Reference
// ================================================================================================================
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 26543659665,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 26543659665) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
};

// flight is primitive, hence it is passed as value
// jonas is reference type i.e., object,
// hence the reference variable jonas contains the address of heap memory location of stored object
// thus passing by value for jonas object actually passes the address of jonas object
// Javascript does not actually support passing by reference.
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

// ================================================================================================================
// First class and Higher order functions (Functions accepting callback functions)
// ================================================================================================================
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  //function properties
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

// ================================================================================================================
// Higher order functions (Functions returning functions)
// ================================================================================================================
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Martha');

//Arrow functions returning functions
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Joe');
*/

// ================================================================================================================
// The call and apply methods
// ================================================================================================================
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//  Does NOT work
// book(23, 'Sarah Williams');

// CALL method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// APPLY method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

//================================================================================================================
// The Bind methods
// ================================================================================================================

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Victor Kilmer Smith');
bookEW23('Martha Cooper');

// With  Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (Pre-setting of parameters)

const addTax = (rate, value) => value + value * (rate / 100);
console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));
*/

//================================================================================================================
// Immediately Invoked Function Expressions (IIFE)
// ================================================================================================================
/*
const runOnce = function () {
  console.log('This will run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

//================================================================================================================
// Closures
// ================================================================================================================

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

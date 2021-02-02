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

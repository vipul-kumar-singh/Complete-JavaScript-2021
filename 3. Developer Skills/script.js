'use strict';

// ================================================================================================================
// Using Prettier
// ================================================================================================================
/*
const x = '23';
const str = "Hello's world";

const birthYear = birthYear => 2021 - birthYear;

console.log(birthYear(1996));

console.log(str);

console.log('Live Server Test');
console.log('Live Server Test 2');
*/

// ================================================================================================================
// Debugging using console and breakpoints
// ================================================================================================================
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  console.log(measurement.value);
  console.table(measurement);
  console.warn(measurement.value);
  console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

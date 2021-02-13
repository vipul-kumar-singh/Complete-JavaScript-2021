'use strict';

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ================================================================================================================
// Simple Array Methods
// ================================================================================================================
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// 1. Slice - splits the array and returns new array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// 2. Splice - splits the original array and returns the deleted array
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// 3. Reverse - Reverses the array and mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// 4. Concat - adds 2 arrays and returns new array
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

// 5. Join - returns array elemtents as string joined by variable
console.log(letters.join(' - '));
*/

// ================================================================================================================
// Looping Arrays - forEach
// ================================================================================================================
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// For-of
console.log(`-------FOR-OF-------`);
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// For-each
console.log(`-------FOR-EACH-------`);
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/

// ================================================================================================================
// forEach with Maps and Sets
// ================================================================================================================

//Map
const currenciesMap = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currenciesMap.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

'use strict';

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
/*
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
*/

// ================================================================================================================
// The map method
// ================================================================================================================
/*
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//  return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map((mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDescription);
*/

// ================================================================================================================
// The filter method
// ================================================================================================================
/*
const deposits = movements.filter(function(mov) {
  return mov > 0;
})

const withdrawals = movements.filter( mov => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);
*/

// ================================================================================================================
// The reduce method
// ================================================================================================================
/*
// accumilator -> value to be used in next iteration
// 0 here is the starting value of accumilator
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const balance2 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance2);

// Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

// ================================================================================================================
// Chaining Methods
// ================================================================================================================
/*
const eurToUsd = 1.1;

//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/

// ================================================================================================================
// The find method
// ================================================================================================================
/*
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);
*/

// ================================================================================================================
// The findIndex method
// ================================================================================================================
/*
console.log(movements.findIndex(element => element > 2999));
console.log(movements.findIndex(element => element > 9999));
*/

// ================================================================================================================
// some and every method
// ================================================================================================================
/*
console.log(movements);
console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

const allDeposits = movements.every(mov => mov > 1500);
console.log(allDeposits);
*/

// ================================================================================================================
// flat and flatMap method
// ================================================================================================================
/*
// flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

const obj1 = {
  arr: [1, 2, 3],
};

const obj2 = {
  arr: [4, 5, 6],
};

const objs = [obj1, obj2];

const overalBalance = objs
  .map(obj => obj.arr)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);

// flatmap() = flat() + map()
const overalBalance2 = objs
  .flatMap(obj => obj.arr)
  .reduce((acc, cur) => acc + cur, 0);

console.log(overalBalance, overalBalance2);
*/

// ================================================================================================================
// Sorting arrays
// ================================================================================================================
/*
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort());

// Ascenfding
// movements.sort((a,b) => {
//   if(a > b) return 1;
//   if(a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a,b) => {
//   if(a > b) return -1;
//   if(a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

// ================================================================================================================
// More ways of creating and filling arrays
// ================================================================================================================

// 1. Using square brackets
console.log([1, 2, 3, 4]);

// 2. Using new keyword
console.log(new Array(1, 2, 3, 4, 5, 6));

// 3. Using array constructor and fill() method
const x = new Array(7);
const y = new Array(7);
console.log(x, y);
x.fill(1);
y.fill(1, 3, 5);
console.log(x, y);

// 4. Array.from()
const arr = Array.from({ length: 7 }, () => 1);
console.log(arr);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

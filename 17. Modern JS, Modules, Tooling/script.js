// ================================================================================================================
// Exporting and Importing in ES6 modules
// ================================================================================================================

//// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js'; //named import
// console.log(shippingCost // will not work);
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

//// Import all exports
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// default import
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js' // not recommended to use both type of export in single import satement
// console.log(price);

import add from './shoppingCart.js';
import { cart } from './shoppingCart.js';

console.log(cart);
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);

// ================================================================================================================
// Module Pattern (Not used in modern development)
// ================================================================================================================
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantiy} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

// ================================================================================================================
// CommonJS Modules
// ================================================================================================================
/*
// Export (With Export object) - Internal Working
export.addToCart = function(product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
};

// Import
const {addToCart} = require('./shoppingCart.js');
*/

// ================================================================================================================
// Introduction To NPM
// ================================================================================================================

// 1. Version check
// npm -v

// 2. Initialize in project
// npm init

// 3. install libraries
// npm install leaflet
// npm i lodash-es

// 4. To install dependencies from package.json
// npm install

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// import using parcel
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantiy: 5 },
    { product: 'pizza', quantiy: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// ================================================================================================================
// Bundling With Parcel and NPM Scripts
// ================================================================================================================

// 1. Install parcel
// npm i parcel@1.12.3 --save-dev

// 2.1 Build and Run project (using npx with argument as entry point of project)
// npx parcel index.html

// Hot module Reloading
// Whenever we change any module, then new modified module will be injected by parcel to browser
// Maintains state of application

if (module.hot) {
  module.hot.accept();
}

// 2.2 Build and Run project (using npm script)
// Add script in package.json
// npm run start

// 3. Build project (using npm script)
// npm build

// ================================================================================================================
// Exporting and Importing in ES6 modules
// ================================================================================================================
/*
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
*/

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

// Export (With Export object) - Internal Working
export.addToCart = function(product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
};

// Import
const {addToCart} = require('./shoppingCart.js');

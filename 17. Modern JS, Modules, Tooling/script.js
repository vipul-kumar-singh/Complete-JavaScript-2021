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

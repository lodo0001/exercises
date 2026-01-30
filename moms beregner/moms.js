"use strict";

// let Price = 20;
// let Moms = 1.25;

// fullPrice(Price, Moms);

// function fullPrice() {
//   console.log(Price * Moms);
// }

fullPrice(200, 33);

function fullPrice(price, moms = 25) {
  console.log("Full Price", (price * moms) / 100 + price);
}

// moms er altid 25, så vi sætter den self til 25

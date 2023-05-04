"use strict";

/* IIFE - Immediatly invoked function expression. */

/* (function () {
  const user = "Igor";
  console.log(user);
  console.log("Ovo je IIFE funkcija");
})();

(function (ime) {
  console.log(`Moje ime je ${ime}`);
})("Igor"); */

const brojac = (() => {
  let broj = 0;
  console.log(`Vrijednost broja je ${broj}`);
  return function () {
    broj += 1;
    console.log(broj);
  };
})();

brojac();
brojac();
brojac();
brojac();
brojac();

const rulet = ((x) => {
  let krediti = x;
  console.log(`Početni broj kredita je ${krediti}`);
  return () => {
    krediti -= 1;
    if (krediti > 0) {
      console.log(`broj vrtnji je ${krediti}`);
    } else {
      console.log("Nemate više vrtnji");
    }
  };
})(5);

rulet();
rulet();
rulet();
rulet();
rulet();

"use strict";

const godina = 23;

if (godina >= 18) {
  console.log("Možeš glasovati");
} else {
  console.log("Ne možeš glasovati");
}

/* Ternary operator za razliku od if elsa nije statement nego expression */

const punoljetan = godina >= 18 ? "Može" : "Ne može";
console.log(punoljetan);

let punoljetan2;

if (godina >= 18) {
  punoljetan2 = "Može";
} else {
  punoljetan2 = "Ne može";
}

console.log(punoljetan2);

console.log(`Može li osoba glasati? ${godina >= 18 ? "Može" : "Ne može"}`);

/* Primjer ternary operatora */

const auth = true;
/* let redirect;

if (auth) {
  alert("Autorizacija je prošla");
  redirect = "./dashboard";
} else {
  alert("Autorizacija nije prošla");
  redirect = "./login";
} */

let redirect = auth
  ? (alert("Autorizacija je prošla"), "./dashboard")
  : (alert("Autorizacija nije prošla"), "./login");

console.log(redirect);

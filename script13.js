"use strict";

/* Funkcije i this ključna riječ u objektima */
const igor = {
  ime: "Igor",
  prezime: "Jevremović",
  godinaRodjenja: 1983,
  zanimanje: "SamSvojRob",
  vozackaDozvola: true,
  starost: function () {
    /* console.log(this); */
    this.dob = 2023 - this.godinaRodjenja;
    return this.dob;
  },
  zadatak() {
    return `${this.ime} je ${this.starost()}-godišnji ${this.zanimanje} i ${
      this.vozackaDozvola ? "ima" : "nema"
    } vozačku dozvolu`;
  },
  login() {
    console.log(this.ime, "je logiran");
  },
  logout() {
    console.log(this.ime, "se odlogirao");
  },
};

/* console.log(igor.starost());
igor.login();
igor.logout();
console.log(igor); */
console.log(igor.zadatak());

/* Malo više o spread operatorima */

/* Kreiranje praznog objekta i punjenje sa vrijednostima */
const todo1 = {};
const todo2 = new Object();
todo1.id = 1;
console.log(todo1);

/* spajanje 2 objekta i spremanje u treći objekt */

const objekt1 = {
  a: 1,
  b: 2,
};

const objekt2 = {
  c: 3,
  d: 4,
};

const objekt3 = {
  ...objekt1,
  ...objekt2,
};

console.log(objekt3);

const objekt4 = Object.assign(objekt1, objekt2);
console.log(objekt4);

/* Objekt metode za dodavanje, mijenjanje i vađenje vrijednosti */

const todos = [
  { id: 1, zadatak: "Kupi kruh" },
  { id: 2, zadatak: "Kupi mlijeko" },
  { id: 3, zadatak: "Kupi namaz" },
];

console.log(todos[0].zadatak);

let x = Object.keys(todos[2]);
console.log(x);

/* Ovo će biti undefined */
x = todos[0].length;

/* Ovo će izvući length iz objekta */
x = Object.keys(todos[0]).length;
console.log(x);

/* Ovo će izvući vrijednost iz objekta */

x = Object.values(todos[0]);
console.log(x);

/* Kako provjeriti postoji li određeni ključ unutar objekta */
x = todos[0].hasOwnProperty("id");
console.log(x);

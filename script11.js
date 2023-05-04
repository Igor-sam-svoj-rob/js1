"use strict";
/* LISTE */

const frend1 = "Josip";
const frend2 = "Igor";
const frend3 = "Marko";

const prijatelji = ["Josip", "Igor", "Marko"];

console.log(prijatelji);
console.log(prijatelji.length);

const godine = new Array(30, 40, 50);
console.log(godine);

console.log(prijatelji[0]);
console.log(prijatelji[1]);
console.log(prijatelji[2]);

console.log(prijatelji[prijatelji.length - 1]);

prijatelji[2] = "Stjepan";
console.log(prijatelji);

prijatelji.unshift("Ivana"); // dodavanje novog člana na početak liste
prijatelji.push("Ivo"); // dodavanje novog člana na kraj liste
console.log(prijatelji);

prijatelji.shift(); // micanje prvog člana liste
prijatelji.pop(); // micanje zadnjeg člana liste

console.log(prijatelji);

const igor = ["Igor", "Jevremović", 2022 - 1983, "Sam svoj rob", prijatelji];
console.log(igor);

const ime = "Igor";
const osoba = [ime, "Jevremović", 2022 - 1983, true, prijatelji];
console.log(osoba);

/* Praktičan primjer - izračun godina */

const izracunGodina = (godRodjenja) => {
  return 2023 - godRodjenja;
};

const godRodjenja = [1990, 1985, 2000, 2005, 2010];
const stjepan = izracunGodina(godRodjenja[0]);
const luka = izracunGodina(godRodjenja[1]);
const ivan = izracunGodina(godRodjenja[2]);

const dobUcenika = [stjepan, luka, ivan];

console.log(dobUcenika);

let x;

x = godRodjenja.includes(2000); // Provjera da li u listi imamo određenu vrijednost
console.log(x);

x = godRodjenja.indexOf(2000); // Provjera na kojem mjestu se nalazi određena vrijednost
console.log(x);

x = godRodjenja.slice(1, 5); // nova lista od postojeće, na princip od / do
console.log(x);

/* Načini spajanja listi */

/* Kreiranje 2 liste */
const voce = ["Jabuke", "Kruške", "Trešnje"];
const povrce = ["Salata", "Paradajz", "Krastavci"];

// Stavljanje jedne liste unutar druge liste
/* voce.push(povrce);
let z = voce;
console.log(z[3]); */

/* Stavljanje 2 liste u novu listu (bit će postavljene kao podliste). */
const sve = [voce, povrce];
console.log(sve);
console.log(sve.flat());

/* Konkateniranje 2 liste u 1 novu listu */
let y;
y = voce.concat(povrce);

console.log(y);

/* Spread operator u službi spajanja listi */
const brojevi = [1, 2, 3];
const noviBrojevi = [...brojevi, 4, 5];
console.log(noviBrojevi);
const noviBrojevi2 = [6, 7, 8];

let yy = [...noviBrojevi, ...noviBrojevi2];
console.log(yy);

/* Statične metode za liste */

/* Provjera da li je nešto lista */

let xx = Array.isArray(frend1);
console.log(xx);

// slaganje listi od pojedinačnih članova stringa

let zz = Array.from("12345");
console.log(zz);

// Slaganje liste od varijabli

const a = 1;
const b = 2;
const c = 3;

const d = Array.of(a, b, c);
console.log(d);

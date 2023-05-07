"use strict";

/* Lista */
const igorLista = [
  "Igor",
  "Jevremović",
  40,
  "SamSvojRob",
  ["Marko", "Luka", "Ivan"],
];

console.table(igorLista);

/* Ista stvar samo koristeći objekt */
const igorObjekt = {
  firstName: "Igor",
  lastName: "Jevremović",
  godine: 40,
  zanimanje: "SamSvojRob",
  prijatelji: ["Marko", "Luka", "Ivan"],
};

console.table(igorObjekt);

/* Dohvaćanje određene vrijednosti putem dot notacije */
console.log(igorObjekt.godine);
console.log(igorObjekt.prijatelji[1]);

/* Dohvaćanje određene vrijednosti putem bracket notacije */

console.log(igorObjekt["godine"]);

/* Dodavanje novih članova objekta */
igorObjekt.lokacija = "Kutina";

/* Izmjena postojećih članova objekta */
igorObjekt.zanimanje = "Predavač";

/* Dodavanje novog člana liste u listi prijatelja u objektu igorObjekt */
igorObjekt.prijatelji.push("Jura");

/* Primjer zašto i kako bi koristili bracket notaciju */

const kljuc = "Name";
console.log(igorObjekt["first" + kljuc]);
console.log(igorObjekt["last" + kljuc]);

/* Primjer bracket notacije */

/* const upitnik = prompt(
  "Što vas zanima o Igoru? Izaberi između firstName, lastName, godine, zanimanje ili prijatelji"
);

console.log(igorObjekt.upitnik);
console.log(igorObjekt[upitnik]);

if (igorObjekt[upitnik]) {
  console.log(igorObjekt[upitnik]);
} else {
  alert("Krivi upis");
} */

let osoba1 = {
  ime: "Igor",
};
/* Problemi prilikom kopiranja objekta */
let osoba2 = osoba1;
console.log(osoba1, osoba2);
osoba2.ime = "Marko";
console.log(osoba1, osoba2);

/* Izrada kopije objekta, ovo je "deep" copy objekta */

const igor = {
  ime: "Igor",
  prezime: "Jevremović",
  godine: 40,
  zanimanje: "SamSvojRob",
  prijatelji: ["Marko", "Luka", "Ivan"],
};

/* kopiranje samo funkcionira sa primitivnim vrijednostima objekta, ako imamo u objektu
podobjekte ili funkcije oni će biti nove podrereferentne točke i neće raditi dobru kopiju */
/* const ivan = {
  ...igor,
  ime: "Ivan",
  prezime: "Ivanović",
};

ivan.prijatelji.shift();

console.table(igor);
console.table(ivan); */

/* DEEP CLONE i pravi način za kopiranje objekta */

const ivan = structuredClone(igor);
ivan.ime = "Ivan";
ivan.prezime = "Ivanović";
ivan.prijatelji.shift();

console.table(igor);
console.table(ivan);

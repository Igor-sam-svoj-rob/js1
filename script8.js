"use strict";

/*  
Zadatak 1.
Real i Barca su odigrali 5 tekmi međusobno ove sezone. Pobjednik je onaj koji ima veći
prosjek golova u tim utakmicama. Izračunaj prosječni rezultat svake ekipe i 
onda međusobno usporedi.
Uzmi u obzir da je moguć jednak rezultat, usporedi rezultate i na tu mogućnost.
Bonus opcija : uključi dodatni uvjet, da je minimalan rezultat 3. Sa tom opcijom tim
pobjeđuje samo ako ima više golova od protivnika i ako je postigao više od 3 golova.
Bonus opcija 2 : Minimalan rezultat se također primjenjuje za izjednačeni rezultat i da
obje ekipe imaju preko 3 gola. Inače nitko ne pobjeđuje.
*/

/* Testni podaci : 
Barca : 2, 3, 1, 3, 4
Real : 1, 4, 1, 5, 0
test podaci B : 
Barca : 1, 2, 1, 1, 3
Real : 1, 1, 3, 0, 2 */

const prosjekBarca = (2 + 3 + 1 + 3 + 4) / 5;
const prosjekReal = (1 + 4 + 1 + 5 + 0) / 5;

console.log(prosjekBarca, prosjekReal);

/* Glavni dio zadatka */
/* if (prosjekBarca > prosjekReal) {
  console.log("Barcelona je pobjednik.");
} else if (prosjekReal > prosjekBarca) {
  console.log("Real je pobjednik");
} else if (prosjekReal === prosjekBarca) {
  console.log("Nitko nije pobijedio");
} */

/* Bonus dodaci na zadatak */

if (prosjekBarca > prosjekReal && prosjekBarca >= 3) {
  console.log("Barcelona je pobjednik.");
} else if (prosjekReal > prosjekBarca && prosjekReal >= 3) {
  console.log("Real je pobjednik");
} else if (
  prosjekReal === prosjekBarca &&
  prosjekReal >= 3 &&
  prosjekBarca >= 3
) {
  console.log("Oboje su pobjednici");
} else {
  console.log("Nitko nije pobjednik");
}

/* 
Zadatak 2.
Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..
Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi varijablu racun za
tu potrebu. Nije dozvoljeno koristiti if else, nego ternary operator.
ispiši string u konzolu sa iznosom računa, i finalnim izračunom (račun + napojnica)
test data:
račun 275
račun 40
račun 430
*/

const racun = 275;

const suma =
  racun >= 50 && racun <= 300
    ? `račun je ${racun}, napojnica je ${racun * 0.15}, ukupno je to ${
        racun + racun * 0.15
      }`
    : `racun je ${racun}, napojnica je ${racun * 0.2}, ukupno je to ${
        racun + racun * 0.2
      }`;
console.log(suma);

const napojnica = racun >= 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;
console.log(
  `racun je ${racun}, napojnica je ${napojnica}, a ukupna vrijednost je ${
    racun + napojnica
  }`
);

"use strict";

// FOREACH metoda
/* ForEach metoda prolazi listu član po član (svaki član ulazi kao parametar) i na njemu
može napraviti određenu izmjenu i to spremiti u neki drugi parametar. */

let brojevi = [10, 20, 30, 40, 50];

brojevi.forEach((broj, index, lista) => {
  console.log(index, broj, lista);
});

const useri = [
  {
    ime: "Ivo",
    prezime: "Ivić",
    godine: 30,
  },
  {
    ime: "Jura",
    prezime: "Jurić",
    godine: 20,
  },
  {
    ime: "Marko",
    prezime: "Marić",
    godine: 25,
  },
];

useri.forEach((user) => {
  console.log(user.ime);
});

//FILTER metoda

/* Filter metoda za razliku od forEach metode vraća određenu vrijednost. Ta vrijednost
je kopija dijela liste filtrirana na način da uključuje u tu novu listu samo one elemente
koji zadovolje tražene kriterije. */

const rijeci = ["prozor", "apartman", "stol", "lopata", "zvrk", "autocesta"];

const rezultat = rijeci.filter((rijec) => rijec.length > 5);
console.log(rezultat);

brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parniBrojevi = brojevi.filter((broj) => {
  return broj % 2 === 0;
});

console.log(parniBrojevi);

// forEach metoda za istu stvar
const parni = [];
brojevi.forEach((broj) => {
  if (broj % 2 === 0) {
    parni.push(broj);
  }
});

console.log(parni);

// Map metoda

/* Map nam dopušta da iz postojeće liste napravimo drugu listu u kojoj će zapisati 
elemente iz objekta. */

const lista = [
  { proizvod: "Bicikl", cijena: 500 },
  { proizvod: "Frižider", cijena: 350 },
  { proizvod: "Perilica", cijena: 500 },
  { proizvod: "Automobil", cijena: 30000 },
  { proizvod: "Tipkovnica", cijena: 30 },
];

const proizvodLista = lista.map((objektIzListe) => {
  return objektIzListe.proizvod;
});

console.log(proizvodLista);

// Find metoda

const findLista = lista.find((objektIzListe) => {
  return objektIzListe.proizvod === "Automobil";
});

console.log(findLista);

// Some metoda

const someLista = lista.some((objektIzListe) => {
  return objektIzListe.cijena <= 400;
});

console.log(someLista);

// Includes metoda

const includes = brojevi.includes(22);
console.log(includes);

// Reduce metoda

/* Reduce metoda se izvršava tzv. "reducer" callback funkcijom, kojoj je svhra da sve
članove liste prođe i svede u jednu vrijednost. */

console.log(brojevi);

const pocetnaVrijednost = 0;

const suma = brojevi.reduce((prijasnjaVrijednost, sadasnjaVrijednost) => {
  return prijasnjaVrijednost + sadasnjaVrijednost;
}, pocetnaVrijednost);

console.log(suma);

const suma2 = brojevi.reduce((prije, sad) => {
  return prije + sad;
}, 0);

console.log(suma2);

const suma3 = () => {
  let prije = 0;
  for (let broj of brojevi) {
    prije += broj;
  }
  return prije;
};

console.log(suma3());

// košarica u web shopu

const kosarica = [
  { id: 1, proizvod: "kruh", cijena: 2 },
  { id: 2, proizvod: "mlijeko", cijena: 2 },
  { id: 3, proizvod: "salama", cijena: 5 },
  { id: 4, proizvod: "keksi", cijena: 4 },
  { id: 5, proizvod: "sapun", cijena: 3 },
];

const total = kosarica.reduce((prije, sad) => {
  return prije + sad.cijena;
}, 0);

console.log(total);

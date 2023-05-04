"use strict";

/* function covjek(ime) {
  function pozdrav() {
    console.log(`Pozz, ja sam ${ime}`);
  }
  function kakoSi() {
    console.log(`Kako se osjeća ${ime}`);
  }
  pozdrav();
  kakoSi();
}

const osoba1 = covjek("Igor");
const osoba2 = covjek("Luka"); */

function covjek(x) {
  const ime = x;
  function pozdrav() {
    console.log(`Pozz, ja sam ${ime}`);
  }
  function kakoSi() {
    console.log(`Kako se osjeća ${ime}`);
  }
  return { pozdrav, kakoSi };
}

const osoba1 = covjek("Igor");
const osoba2 = covjek("Luka");

osoba1.pozdrav();
osoba1.kakoSi();
osoba2.pozdrav();
osoba2.kakoSi();

/* Drugi primjer za closure */

function roditelj() {
  let x = 5;
  let y = 2;
  console.log(x);
  console.log(y);

  function dijete() {
    console.log((x += 2));
    console.log((y += 4));
  }
  return dijete;
}

const zbrajanje = roditelj();
console.log(zbrajanje);
zbrajanje();
zbrajanje();

/* Primjer closure na više funkcija */

function komadiHrane(voce) {
  return voce * 4;
}

function nutriBullet(jabuke, jagode) {
  const komadiJabuke = komadiHrane(jabuke);
  const komadiJagode = komadiHrane(jagode);
  console.log(komadiJabuke, komadiJagode);

  const sok = `Sok od ${komadiJabuke} komada jabuke i ${komadiJagode} komada jagode.`;
  return sok;
}

console.log(nutriBullet(2, 15));

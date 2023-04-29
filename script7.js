"use strict";

function logger() {
  console.log("Zovem se Igor");
}

/* logger();
logger();
logger();
logger();
logger(); */

/* Unutar zagrada funkcije se nalaze parametri funkcije, u ovom slučaju jabuke i jagode su parametri */
function sokovnik(jabuke, jagode) {
  /*   console.log(jabuke, jagode); */
  return `Sok od ${jabuke} jabuke i od ${jagode} jagoda`;
  /* Return završava izvršavanje fuunkcije i specificira vrijednost koja se treba vratiti u funkciju */
  console.log(jabuke, jagode); // ovo se neće izvršiti
}
console.log(sokovnik(2, 10));

/* Pozivanje funkcije sa parametrima */

/* OVAKO POZIVAT I SPREMATI REZULTAT FUNKCIJE */
const sokOdJabuka = sokovnik(4, 0);
console.log(sokOdJabuka);

/* Vježba sa funkcijama */

function izracunGod(godRodjenja) {
  return 2023 - godRodjenja;
}

const igorRodjen = izracunGod(1983);

const izracun = function izracunGodina(godRodjenja) {
  return 2023 - godRodjenja;
};

const josipRodjen = izracun(1999);
console.log(josipRodjen);

/* Arrow funkcije */

const markoRodjen = function (godRodjenja) {
  return 2023 - godRodjenja;
};

/* Kada se nalazi one-liner unutar arrow funkcije možemo napisati ovako: */
const andrijaRodjen = (godRodjenja) => 2023 - godRodjenja;

/* Međutim kada pišemo više toga u arrow funkciji onda moramo dodati zagrade {} */
const godineDoMirovine = (godRodjenja, imePrezime) => {
  const godine = 2023 - godRodjenja;
  const mirovina = 65 - godine;
  if (mirovina > 0) {
    console.log(`${imePrezime} će se umiroviti za ${mirovina} godina`);
    return mirovina;
  } else {
    return -1;
  }
};

console.log(godineDoMirovine(1983, "Igor"));
console.log(godineDoMirovine(1950, "Deda"));

lopta = "nogometna";

/* Uvod u scope i closure */

const sport = () => {
  let lopta2 = "rukometna";
  return {
    sport2: () => {
      return console.log(lopta, lopta2);
    },
  };
};

var lopta;

const noviSport = sport();
console.log(noviSport);
noviSport.sport2();

/* Uvod u closure */

/* Jedan način unosa vrijednost u funkciju putem parametra */

/* function dodaj(vanjskiBroj) {
  const unutarnjiBroj = 5;
  return unutarnjiBroj + vanjskiBroj;
}

console.log(dodaj(10)); */

/* Način unosa vrijednosti putem varijable i kada je pozvana */

let vanjskiBroj = 10;

function dodaj() {
  const unutarnjiBroj = 5;
  return unutarnjiBroj + vanjskiBroj;
}

console.log(dodaj());

vanjskiBroj = 20;
console.log(dodaj());

/* Način rješavanja problema sa vanjskom i unutarnjom funkcijom */

vanjskiBroj = 30;

function dodajVanjska(vanjskiBroj) {
  function dodajUnutarnja(unutarnjiBroj) {
    return vanjskiBroj + unutarnjiBroj;
  }
  return dodajUnutarnja;
}

/* console.log(dodajVanjska(5));
console.dir(dodajVanjska(5)); */

const dodaj4 = dodajVanjska(4);
const dodaj5 = dodajVanjska(5);

console.log(dodaj4(4));
console.log(dodaj5(5));

/* Napredni primjer sa buttonima. */

function updateKlik() {
  let klikovi = {};
  let gumb;
  function reportKlik(klik) {
    gumb = klik.id;
    klikovi[gumb] = klikovi[gumb] + 1 || 1;
    console.log(klikovi);
  }
  return reportKlik;
}

const report = updateKlik();

document.querySelectorAll(".klikovi").forEach((x) => {
  x.addEventListener("click", (event) => {
    report(event.target);
  });
});

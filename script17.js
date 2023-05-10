/* console.log("gol 1 ⚽");
console.log("gol 2 ⚽");
console.log("gol 3 ⚽");
console.log("gol 4 ⚽");
console.log("gol 5 ⚽");
console.log("gol 6 ⚽");
console.log("gol 7 ⚽");
console.log("gol 8 ⚽");
console.log("gol 9 ⚽");
console.log("gol 10 ⚽"); */

/* Rekurzija */
function golovi(gol) {
  // 1. stvar - definiramo uvjet koji se mora ispuniti da se završi rekurzija
  if (gol > 10) return;
  // 2. rekurzivnu funkciju
  else console.log(`gol ${gol} ⚽`);
  return golovi(gol + 1);
}

golovi(1);

/* For petlja */

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++) {
  console.log(`gol ${ponavljanje} ⚽`);
}

/* For petlja za prolazak/ispis članova liste */
const predmeti = ["stol", "stolica", "stoljnjak", "vaza"];

for (let i = 0; i < predmeti.length; i++) {
  console.log(predmeti[i]);
}

/* Korištenje of metode kod for petlji za elegantniji ispis članova liste */
for (const predmet of predmeti) {
  console.log(predmet);
}

/* Korištenje iste metode za listu objekata */
const korisnici = [{ ime: "Igor" }, { ime: "Stjepan" }, { ime: "Josip" }];

for (const imena of korisnici) {
  console.log(imena.ime);
}

const rijec = "Algebra";

for (const slovo of rijec) {
  console.log(slovo);
}

/* Korištenje in metode za objekte */

const listaBrojeva = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

for (const vrijednost of Object.values(listaBrojeva)) {
  console.log(vrijednost);
}

for (const kljuc in listaBrojeva) {
  console.log(listaBrojeva[kljuc]);
}

/* Korištenje in metode za liste */

const boje = ["crvena", "zelena", "plava"];

for (const boja in boje) {
  console.log(boje[boja]);
}

/* Ispitivanje što imamo u listi */

const user = [
  "Ivan",
  "Ivić",
  40,
  "Strojar",
  true,
  ["Marko", "Stjepan", "Luka"],
];

const tipPodataka = [];

for (let i = 0; i < user.length; i++) {
  tipPodataka[i] = typeof user[i];
}

console.log(tipPodataka);

/* Ugniježđena for petlja */

for (let i = 1; i <= 5; i++) {
  console.log(`broj ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

/* Mali zadatak */

const imena = ["Ivan", "Stjepan", "Mario", "Marko", "Igor"];

for (let i = 0; i < imena.length; i++) {
  if (imena[i] === "Stjepan") {
    console.log("Ja sam Stjepan");
  } else {
    console.log(imena[i]);
  }
}

/* Koristeći jednu listu, složiti kalkulaciju čiji rezultat će populirati drugu listu */

const godine = [1995, 1999, 2003, 2009];
const dob = [];

for (let i = 0; i < godine.length; i++) {
  dob.push(2023 - godine[i]);
}

console.log(dob);

/* Break for petlje */

for (let i = 0; i <= 20; i++) {
  if (i === 10) {
    console.log("Zaustavi izvođenje");
    break;
  }
  console.log(i);
}

/* Continue for petlje */

for (let i = 0; i <= 20; i++) {
  if (i === 10) {
    console.log("Umjesto 10, napiši deset");
    continue;
  }
  console.log(i);
}

for (let i = 0; i < user.length; i++) {
  if (typeof user[i] !== "string") continue;
  console.log(user[i]);
}

for (let i = 0; i < user.length; i++) {
  if (typeof user[i] === "number") break;
  console.log(user[i]);
}

/* Loopanje unazad */

for (let i = user.length - 1; i >= 0; i--) {
  console.log(user[i]);
}

/* While loop */

for (let i = 0; i <= 10; i++) {
  console.log(`dižemo utege ${i} puta`);
}

/* While loop način pisanja iste stvari */

let i = 1;
while (i <= 10) {
  console.log(`dižemo utege ${i} puta`);
  i++;
}

/* Bacanje kockice */

let kocka = Math.floor(Math.random() * 6 + 1);
console.log(kocka);

while (kocka !== 6) {
  console.log(`Dobio si ${kocka}`);
  kocka = Math.floor(Math.random() * 6 + 1);
  if (kocka === 6) {
    console.log(`Dobio si ${kocka}`);
  }
}

const js = "JS je super";
// Definiranje varijable js kao stringa

console.log("JS je super");
// Ispis u konzoli stringa

console.log(js);
// Ispis varijable u js u konzoli

console.log(40 + 8 + 2 - 25);
// Ispis matematičke jednadžbe u konzoli

let ts = "TS je također super";
// Definiranje varijable ts

console.log(ts);
// Ispis varijable ts u konzoli

ts = 2;
// Promjena vrijednosti zs varijable

console.log(ts);
// Ispis nove vrijednosti varijable ts u konzoli

var x = 50;
var x = 25;
console.log(x);
/* Način definiranja var varijable i jedna od razloga zašto ju nećemo koristiti */

const jozek_barica = "jožek i barica";
const sendvic3 = 3;

const igor = "osoba";
// varijabla definirana kao konstanta mora biti incijalizirana i deklarirana istovremeno

let ivana;
ivana = "osoba";
ivana = "svemirac";
console.log(ivana);

// varijabla definirana kao let može biti inicijalizirana a naknadno deklarirana

/* -- VRSTE VARIJABLI -- */

const brojevi = 20;
// definiranje broja

const imePrezime = "Igor Jevremović";
// definiranje stringa

const istina = true;
// definiranje booleana koji može biti samo true ili false

let brojGladnih;
// undefined varijabla - vrijednost varijable

let javascriptJeZabavan = true;
console.log(javascriptJeZabavan);

javascriptJeZabavan = false;
// mutirali smo vrijednost varijable (mutating na engleskom)

console.log(typeof true);
console.log(typeof javascriptJeZabavan);
console.log(typeof brojevi);
console.log(typeof imePrezime);
console.log(typeof brojGladnih);
console.log(typeof "Igor");
console.log(typeof null);
// typeof ispisi određenih vrijednosti u konzoli

const stil = "padding:10px; background-color:#fff; color:red;";
console.log("%cPozdrav", stil);
// stilizacija console loga

const godina = 2023;

const godinaStarostiJosip = godina - 1990;
console.log(godinaStarostiJosip);

// deklariranje vrijednosti varijable pomoću druge varijable

const ime = "Igor";
const prezime = "Jevremović";

console.log(ime + prezime);
console.log(ime + " " + prezime);

/* Matematički operatori */

let y = 10 + 5;
/* y = y + 10; */
y += 10;
console.log(y);
y -= 1;
console.log(y);
y *= 4;
console.log(y);
y /= 3;
console.log(y);
y %= 3;
// / modulo  %  (ostatak djeljenja)
console.log(y);
y **= 7;
// potenciranje na n-tu
console.log(y);
/* y += 1; */
y++;
y--;
// y++ i y-- samo dodaju/oduzimaju za 1
console.log(y);

/* Usporedni operatori */
const godinaStarostiMarko = y - 50;

console.log(godinaStarostiJosip > godinaStarostiMarko);
console.log(godinaStarostiJosip <= godinaStarostiMarko);
console.log(godinaStarostiJosip >= 18);

let a, b;

a = b = 25 - 5 - 7;
console.log(a, b);

const prosjek = (godinaStarostiJosip + godinaStarostiMarko) / 2;
console.log(prosjek, godinaStarostiJosip, godinaStarostiMarko);

const zemlja = "Hrvatska";
const kontinent = "Europa";
const populacija = "3.8 M";

console.log(zemlja.length);
console.log(zemlja.charAt(4));
console.log(zemlja.toUpperCase());
console.log(zemlja.toLowerCase());

/* --------------------------------------------------------------------- */

// String literal način pisanja

console.log(
  zemlja +
    " država ima " +
    populacija +
    " stanovnika. " +
    "Nalazi se u " +
    kontinent +
    "."
);

// Template literal način pisanja

console.log(
  `${zemlja} država ima ${populacija} stanovnika. Nalazi se u ${kontinent}.`
);

// Math metode sa brojevima i varijablama

let c;

c = Math.sqrt(16);
//korijen
console.log(c);

c = Math.abs(-5);
//apsolutna vrijednost
console.log(c);

c = Math.round(5.2);
//zaokruživanje
console.log(c);

c = Math.ceil(5.2);
//zaokruživanje na gore
console.log(c);

c = Math.floor(5.9);
//zaokruživanje na dolje
console.log(c);

c = Math.trunc(5.4);
//uklanjanje decimalnog dijela vrijednosti
console.log(c);

c = Math.min(6, 2, 4, 8, 10);
//najmanji broj iz liste brojeva
console.log(c);

c = Math.max(6, 2, 4, 8, 10);
//najveći broj iz liste brojeva
console.log(c);

c = Math.random();
console.log(c);
c = Math.random() * 10;
console.log(c);

c = Math.floor(Math.random() * 10 + 1);
console.log(c);

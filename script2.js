/* IF-ELSE provjera */

if (true) {
  console.log("Funkcioniram na istinitu tvrdnju.");
}

if (false) {
  console.log("Ne funkcioniram na neistinitu tvrdnju.");
}

/* ----------------------------------------------------- */

const godina = 19;
const punoljetan = godina >= 18;
console.log(punoljetan);

if (punoljetan) {
  console.log("Punoljetan si!");
} else {
  console.log("Nisi punoljetan");
}

/* ------------------------------------------------------ */

const Marko = 15;
let doPunoljetnosti;

if (Marko >= 18) {
  console.log(`Marko je punoljetan`);
} else {
  doPunoljetnosti = 18 - Marko;
  console.log(
    `Marko nije punoljetan, treba mu još ${doPunoljetnosti} godina/e.`
  );
}

console.log(Marko);
console.log(doPunoljetnosti);

/* -------------------------------------------------------- */

const godRodjenja = 1983;

if (godRodjenja <= 2000) {
  let istina = true;
} else {
  let istina = false;
}

/* console.log(istina); */

/* --------------------------------------------------------- */

const hrvatska = 3.8e6;
let prosjek;

if (hrvatska > 5000000) {
  console.log("ima");
} else {
  prosjek = 5000000 - hrvatska;
}
console.log(`Nema dosta. Fali joj ${prosjek}.`);

/* Conversion vrijednosti */

let inputGodina = "2000";
console.log(inputGodina + 23);

/* Pretvaranje stringa u broj, ako se to može napraviti (pod uvjetom da je u stringu zapisan broj) */
inputGodina = Number(inputGodina);
/* inputGodina = parseInt(inputGodina); */
/* inputGodina = +inputGodina; */

console.log(inputGodina);

/* Pretvaranje broja nazad u string. */

inputGodina = String(inputGodina);
console.log(inputGodina);

/* Pretvaranje decimalnog broja iz stringa u broj */

let decBroj = "10.5";
/* parseInt funkcijska metoda će zaokružiti broj i to na niže. */
/* decBroj = parseInt(decBroj);
console.log(decBroj); */
/* parseFloat funkcijska metoda će ispisati sa decimalom. */
decBroj = parseFloat(decBroj);
console.log(decBroj);

/* ------------------------------------------------------- */

/* Coercion vrijednosti */

/* Tip Coercion je prisilno pretvaranje vrijednosti. */

console.log("Ja imam " + 40 + " godina.");

console.log("Ja imam " + String(40) + " godina.");

console.log("23" - "10" - 3);

console.log("23" + "10" + 3);

console.log("23" * "10" + 3);

console.log("23" / "10" + 3);

console.log(5 + true);

console.log(5 + false);

console.log(5 + undefined);

let x = "1" + 1;
console.log(x);

x -= 1;

console.log(x);

let y = 2 + 3 + 4 + "5";
console.log(y);

// I, ILI i NOT operator

const imaVozackuDozvolu = true;
const dobarVid = false;
const umoran = true;

console.log(imaVozackuDozvolu && dobarVid);
console.log(imaVozackuDozvolu || dobarVid);
console.log(!imaVozackuDozvolu);
console.log(imaVozackuDozvolu && !dobarVid && !umoran);

const mozeVoziti = imaVozackuDozvolu || dobarVid;

if (mozeVoziti) {
  console.log("Osoba može voziti");
} else {
  console.log("Osoba ne može voziti");
}

if (imaVozackuDozvolu && !dobarVid && !umoran) {
  console.log("možeš voziti");
} else {
  console.log("ne možeš voziti");
}

// Nullish coalescing operator - Nulti operator spajanja

let nullish;

nullish = 10 ?? 20;
console.log(nullish);

nullish = "lijeva" ?? "desna";
console.log(nullish);

nullish = "" ?? "desna";
console.log(nullish);

nullish = NaN ?? "desna";
console.log(nullish);

nullish = false ?? "desna";
console.log(nullish);

// Samo za undefined i null će se ispisati desna strana

nullish = null ?? "desna";
console.log(nullish);

nullish = undefined ?? "desna";
console.log(nullish);

/* Primjeri operatora i zanimljive primjene */

let x;

// Kada su sve tvrdnje truthy, ispisat će se zadnja truthy vrijednost
x = 10 && 20 && 30 && 40 && 5;
console.log(x);

// Kada se pojavi falsy tvrdnja, prva falsy vrijednost će biti zapisana
x = 10 && 20 && "" && 5 && 3 && undefined;
console.log(x);

// Praktična primjena I operatora
let y = [];

console.log(y[0]);
console.log(y.length);
y.length > 0 && console.log(y[0]);

y = [1, 2];
y.length > 0 && console.log(y[0]);

// Kod ili operatora prva točna vrijednost će se ispisati, a u slučaju da su sve falsy,
// ispisat će se zadnja falsy vrijednost.

let z;

z = 10 || 20;
z = 0 || 10 || null || "" || undefined;
console.log(z);
z = 0 || null || "" || undefined;
console.log(z);

/* Logički zadatke */

let a = false;

/* if (!a) {
  a = 10;
} */

/* a = a || 10; */

a ||= 20;

console.log(a);

let b = 20;

/* if (b) {
  b = 30;
} */

/* b = b && 30; */

b &&= 30;

console.log(b);

let c = null;

/* if (c === undefined || c === null) {
  c = 20;
} */

/* c = c ?? 20; */

c ??= 20;

console.log(c);

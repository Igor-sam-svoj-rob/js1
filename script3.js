// Truthy i falsy values

/* 
0 = falsy;
"" = falsy;
undefined = falsy;
NaN = falsy;
null = falsy;
*/

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

const novac = 0;

/* Implicitna provjera Boolean vrijednosti varijable novac koja će biti truthy ili falsy value */
if (novac) {
  console.log("Imaš novaca");
} else {
  console.log("Nemaš novaca");
}

let ime = "";

if (ime) {
  console.log("Imaš ime");
} else {
  console.log("Nemaš ime");
}

// Strict i Loose usporedba

const godina = 18;

if (godina == "18") {
  console.log(
    "Točno jer će dovoljno biti provjeriti da li je vrijednost ista."
  );
}

if (godina === "18") {
  console.log("Netočno jer je jedno broj, a drugo string");
}

// Equality operators

/* const broj = Number(prompt("Koji ti je najdraži broj?")); */
/* console.log(broj, typeof broj); */

if (broj === 7) {
  console.log("Broj 7 je super");
} else if (broj === 23) {
  console.log("Broj 23 je super");
} else if (broj === 5) {
  console.log("Broj 5 je super");
} else {
  console.log("Niste odabrali super broj");
}

if (broj !== 15) {
  console.log("Zašto ne 15?");
}

/* Napravite usporedbu koliko Hrvatska ima susjednih zemalja na način da imate if else
provjeru:
1. ako imamo 1 susjeda.
2. ako imamo više od 1 susjeda
3. ako nemamo susjeda
Broj s kojim želimo uspoređivati broj susjeda unesite putem prompta.
*/

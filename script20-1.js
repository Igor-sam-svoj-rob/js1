"use strict";

/* Kreiranje novog div taga */
const noviZadatak = document.createElement("li");

/* Dodavanje klase na novi div tag */

noviZadatak.className = "novi-element";

/* Dodavanje ID-a na element */

noviZadatak.id = "id-novog-elementa";

/* Dodavanje sadržaja elementu */

noviZadatak.innerHTML = "Ja sam novi div";

/* console.log(noviZadatak);

document.body.appendChild(noviZadatak);

document.querySelector("#zadatak-list").appendChild(noviZadatak); */

/* Idemo složiti funkciju koja će ubacivati nove list elemente, a putem parametra ćemo
ubacivati sadržaj u te elemente. */

// Brži način

function kreirajZadatak(zadatak) {
  const li = document.createElement("li");
  li.className = "pojedinacni-zadatak";

  li.innerHTML = `${zadatak}
  <button class="ukloni-zadatak btn-link">
  <i class="fa-solid fa-xmark"></i>
  </button>
  `;

  document.querySelector(".zadatak").appendChild(li);
}

kreirajZadatak("Kupi sladoled");
kreirajZadatak("Kupi jogurt");
kreirajZadatak("Kupi traktor");

// Sporiji ali detaljniji način

function kreirajZadatak2(zadatak) {
  const li = document.createElement("li");
  li.innerText = zadatak;
  li.className = "pojedinacni-zadatak";

  const button = document.createElement("button");
  button.className = "ukloni-zadatak btn-link";

  const ikonica = document.createElement("i");
  ikonica.className = "fa-solid fa-xmark";

  button.appendChild(ikonica);
  li.appendChild(button);

  document.querySelector(".zadatak").appendChild(li);
}

kreirajZadatak2("Ovo je zadnji zadatak");

// Refaktoriranje

function kreirajZadatak3(zadatak) {
  const li = document.createElement("li");
  li.innerText = zadatak;
  /* li.appendChild(document.createTextNode(zadatak)); */
  li.className = "pojedinacni-zadatak";

  const button = napraviButton("ukloni-zadatak btn-link");
  li.appendChild(button);

  document.querySelector(".zadatak").appendChild(li);
}

function napraviButton(klase) {
  const button = document.createElement("button");
  button.className = klase;

  const ikonica = napraviIkonu("fa-solid fa-xmark");
  button.appendChild(ikonica);
  return button;
}

function napraviIkonu(klase) {
  const ikonica = document.createElement("i");
  ikonica.className = klase;
  return ikonica;
}

// insertAdjacentElement metoda

function ubaciElement() {
  const filter = document.querySelector(".filter");
  const p = document.createElement("p");
  p.textContent = "Tekst koji ćemo ubaciti";

  /* filter.insertAdjacentElement("beforebegin", p); */
  /* filter.insertAdjacentElement("afterbegin", p); */
  /* filter.insertAdjacentElement("beforeend", p); */
  filter.insertAdjacentElement("afterend", p);
}

ubaciElement();

function ubaciTekst() {
  const zadatak = document.querySelector(".zadatak");
  /* zadatak.insertAdjacentText("afterbegin", "Novi tekst"); */
  zadatak.insertAdjacentHTML("beforeend", "<mark>OVo je AdjacentHTML</mark>");
}

ubaciTekst();

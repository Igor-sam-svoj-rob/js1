"use strict";

// Replace metoda

function zamijeniZadatak() {
  const zadatak = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.innerText = "Zamijenili smo prvi zadatak";

  zadatak.replaceWith(li);
}

zamijeniZadatak();

// OuterHTML metoda

function zamijeniZadatak2() {
  const zadatak = document.querySelector("li:first-child");
  zadatak.outerHTML = "<li>Zamijenili smo opet prvi zadatak</li>";
}

zamijeniZadatak2();

//forEach metoda

function zamijeniSve() {
  const lista = document.querySelectorAll("li");
  lista.forEach((zadatak, kljuc) => {
    if (kljuc === 0) {
      zadatak.outerHTML = "<li>Zamijenili smo forEach metodom</li>";
    } else {
      zadatak.outerHTML = "<li>Ovo su ostali elementi</li>";
    }
  });
}

zamijeniSve();

/* Brisanje elementa remove i removeChild metodom */

function ukloniElement() {
  // brisanje remove metodom
  document.querySelector("#clear").remove();

  //brisanje člana liste removeChild metodom
  const zadatak = document.querySelector(".zadatak");
  const li = document.querySelector("li:last-child");
  zadatak.removeChild(li);
}

/* ukloniElement(); */

const naslov = document.querySelector("h1");
const zadatak = document.querySelector(".zadatak");
const zadaci = document.querySelector(".li");

function vjezba() {
  console.log(1);
  //promjena klase
  naslov.className = "promjena";
  //dodavanje klase na postojeću klasu (izrada liste klasa)
  naslov.classList.add("promjena2");
  //uklanjanje klase sa postojeće liste klasa
  naslov.classList.remove("promjena");
  //promjena samo jedne klase iz liste klasa u neku drugu klasu
  naslov.classList.replace("promjena2", "promjena3");
  //toggle metoda funkcionira kao prekidač za svjetlo - ubaci/izbaci klasu na klik
  naslov.classList.toggle("promjena");

  //direktna promjena stilizacije
  naslov.style.backgroundColor = "red";
}

document.querySelector("#clear").onclick = vjezba;

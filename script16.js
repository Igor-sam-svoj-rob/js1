"use strict";

/* const user1 = {
  ime: "Igor",
  prezime: "Jevremović",
  godine: 40,
  logiran() {
    console.log(this.ime, "se logirao");
  },
  odlogiran() {
    console.log(this.ime, "se odlogirao");
  },
};

const user2 = {
  ime: "Jura",
  prezime: "Jurić",
  godine: 40,
  logiran() {
    console.log(this.ime, "se logirao");
  },
  odlogiran() {
    console.log(this.ime, "se odlogirao");
  },
};

const user3 = {
  ime: "Marko",
  prezime: "Markić",
  godine: 40,
  logiran() {
    console.log(this.ime, "se logirao");
  },
  odlogiran() {
    console.log(this.ime, "se odlogirao");
  },
}; */

/* class Auto {
  constructor(proizvodjac, model, godina) {
    this.proizvodjac = proizvodjac;
    this.model = model;
    this.godina = godina;
  }
}

const auto1 = new Auto("BMW", "M5", 2020);
const auto2 = new Auto("Mercedes", "CLK", 2015);

console.log(auto1, auto2); */

class User {
  constructor(ime, prezime, godine) {
    this.ime = ime;
    this.prezime = prezime;
    this.godine = godine;
    this.provjera = false;
  }
  logiran() {
    this.provjera = true;
    console.log(this.ime, "se logirao.", this.provjera);
    return this;
  }
  odlogiran() {
    this.provjera = false;
    console.log(this.ime, "se odlogirao.", this.provjera);
    return this;
  }
}

const user1 = new User("Igor", "Jevremović", 40);
const user2 = new User("Ivan", "Ivić", 30);
const user3 = new User("Luka", "Lukić", 20);

console.log(user1, user2, user3);

/* user1.logiran();
user2.logiran();
user1.odlogiran(); */

user1.logiran().odlogiran().logiran();

let listaUsera = [];
listaUsera.push(user1, user2, user3);

class Admin extends User {
  obrisiUsera(userIzParametra) {
    listaUsera = listaUsera.filter((userIzListe) => {
      return userIzListe.ime != userIzParametra.ime;
    });
  }
}

const admin = new Admin("admin", "adminić", 10);

admin.obrisiUsera(user1);

console.log(listaUsera);

"use strict";

const user1 = {
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
};

class auto {
  constructor(proizvodjac, model, godina) {
    this.proizvodjac = proizvodjac;
    this.model = model;
    this.godina = godina;
  }
}

const auto1 = new auto("BMW", "M5", 2020);
const auto2 = new auto("Mercedes", "CLK", 2015);

console.log(auto1, auto2);

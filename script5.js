const dan = prompt("Koji je danas dan?").toLowerCase();

/* console.log(dan); */

switch (dan) {
  case "ponedjeljak":
    console.log("danas je ponedjeljak");
    break;
  case "utorak":
    console.log("danas je utorak");
    break;
  case "srijeda":
    console.log("danas je srijeda");
    break;
  case "četvrtak":
    console.log("danas je četvrtak");
    break;
  case "petak":
    console.log("danas je petak");
    break;
  case "subota":
    console.log("danas je subota");
    break;
  case "nedjelja":
    console.log("nedjelja");
    break;
  default:
    console.log("niste unesli dan u tjednu.");
}

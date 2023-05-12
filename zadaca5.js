/* Zadatak 1

Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

1) napravi listu racuni koja sadrži 10 vrijednosti između 1 i 400.

2) napravi prazne liste za napojnice i totale (racun + napojnica)

3)Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Ovo smo već izračunali...
Koristimo istu funkciju koju smo koristili zadnji put. 
Onda upotrijebite for petlju kako bi napravili 10 kalkulacija.

savjet 1 : pomoću funkcije napravite izračun napojnica.

savjet 2: pozovite napojnica varijablu iz točke 3 unutar petlje i upotrijebite push metodu kako 
bi dodali vrijednosti u listu napojnice i u listu ukupno.
*/

/* Zadatak 2

Napravite generičku funkciju (DRY pristup) koja može za input dobiti putem parametra listu,
proći kroz listu, napraviti sumu svih članova liste i na kraju izračunati prosjek liste.
Možete za testiranje inputa ubaciti liste računi i napojnice iz zadatka 1.

savjet 1: Napravite varijablu sa početnom vrijednosti nula i kako prolazite kroz listu dodajte novu vrijednost u sumu.

savjet 2: u returnu izračunajte prosjek.
*/

/* Zadatak 3

Iz postojeće liste objekata koristeći neku od metodi liste, izvadite limuzine u novu listu */

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2014 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2015 },
  { ime: "BMW", kategorija: "coupe", godinaProizvodnje: 2010 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2011 },
  { ime: "Peugeot", kategorija: "limuzina", godinaProizvodnje: 2018 },
  { ime: "Range Rover", kategorija: "jeep", godinaProizvodnje: 2017 },
];

/* Zadatak 4

Iz postojeće liste objekata koristeći reduce metodu, zbrojite trošak košarice u varijablu.
 */

const kosarica = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Perilica", cijena: 2000 },
  { proizvod: "Romobil", cijena: 400 },
  { proizvod: "Auto", cijena: 100000 },
  { proizvod: "Tipkovnica", cijena: 100 },
];

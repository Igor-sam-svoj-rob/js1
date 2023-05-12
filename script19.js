/* console.log(window); */

/* console.log(document); */

/* console.log(document.body.innerHTML); */

/* console.log(document.body.innerText); */

/* document.body.innerHTML = "<h1>Hello World!</h1>"; */

// GetElementByID

/* console.log(document.getElementById("header")); */

const header = document.getElementById("header");
header.innerHTML = "<h1>Hello World!</h1>";

document.getElementById("header").innerHTML = "<h1>Hello World!</h1>";

/* console.log(document.getElementsByTagName("h1")[0].innerHTML); */
const naslov = document.getElementById("naslov");

naslov.setAttribute("class", "naslov_h1");
naslov.innerHTML = "<strong>Ovo je novi naslov!</strong>";

naslov.style.color = "#ff0000";
naslov.style.backgroundColor = "#eee";
naslov.style.padding = "3rem";
naslov.style.borderRadius = "25px";

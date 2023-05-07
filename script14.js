"use strict";

let x = new Date();
let y;
/* console.log(x); */

/* x = x.toString(); */
/* console.log(x); */

/* x = new Date("2023-05-05T10:20:30");
x = new Date("05/05/2023 10:20:30");
console.log(x); */

/* x = x.getTime(); */
y = x.getFullYear();
y = x.getDay();
y = x.getHours();
y = x.getMonth() + 1;
y = x.getMinutes();
y = x.getMilliseconds();
y = x.getSeconds();
y = Intl.DateTimeFormat("hr-HR").format(x);
console.log(y);

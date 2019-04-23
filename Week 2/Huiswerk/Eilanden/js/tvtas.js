/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var eilanden = ["Terschelling", "Ameland", "Schiermonnikoog", "Rottumerplaat"];

var aantalEilanden = eilanden.length;

var eersteEiland = eilanden[0];
var laatsteEiland = eilanden[eilanden.length - 1];

document.querySelector('p').textContent = "Aantal eilanden: " + aantalEilanden;
document.querySelector('p').textContent += "\n" + eersteEiland;
document.querySelector('p').textContent += "\n" + laatsteEiland;

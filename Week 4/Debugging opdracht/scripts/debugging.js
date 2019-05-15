/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* Copyleft        */
/* D. de Vries    */
/* Week 3       */


//Dit script begroet mijn collega's en toont dit in de browser!

//array collega's
var collegas = ['Walter', 'Laura', 'Sonja'];
var content = document.querySelectorAll('body')[0];



//deze functie begroet mijn collega's
function groet(persoon) {
    var naam = persoon.toLowerCase();
    var printTekst = 'Hallo ' + naam + " ";
    content.textContent = content.textContent + printTekst;
}

//hier roep ik drie keer de functie aan
for(x = 0; x < collegas.length; x++){
    groet(collegas[x]);
}

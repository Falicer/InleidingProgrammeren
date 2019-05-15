/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var responseKleur;

function stoplight(kleurInput, afstandTotStoplicht) {
    kleurInput.toLowerCase();
    if (kleurInput == 'rood') {
        responseKleur = "stoppen";

    } else if (kleurInput == 'oranje') {
        if (afstandTotStoplicht <= 10) {
            responseKleur = "gas geven!";
        } else {
            responseKleur = "remmen";
        }

    } else if (kleurInput == 'groen') {
        responseKleur = "doorrijden";

    } else {
        responseKleur = "\n Geen juiste kleur input!";

    }

    console.log(responseKleur);

    return responseKleur;
}

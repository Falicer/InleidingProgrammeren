/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

function berekenConsumptie(huidigLeeftijd, streefLeeftijd, favorieteConsumptie, dagelijksConsumptie, prijsConsumptie){
    document.querySelector('p').textContent += "Je bent nu " + huidigLeeftijd + " tot je streefleeftijd van " + streefLeeftijd + " wil je " + dagelijksConsumptie + " keer per dag " + favorieteConsumptie + " eten/drinken." ;
    document.querySelector('p').textContent += "\n 1 " + favorieteConsumptie + " kost " + prijsConsumptie;
}

berekenConsumptie(21, 70, "slavinken" + 2 + 1.50);

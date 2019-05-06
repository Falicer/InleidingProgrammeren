/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
var klasgenoten;
var x;

function groet(inputNaam){
    console.log('Hallo ' + inputNaam);
}

klasgenoten = ['Raekwon', 'Kelly', 'Alex'];

groet('John');

for(x = 0; x < klasgenoten.length; x++){
    groet(klasgenoten[x]);
    document.querySelector('p').textContent += "Hallo " + klasgenoten[x] + " \n";
}


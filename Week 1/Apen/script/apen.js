/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* Copyleft        */
/* D de Vries    L. Benvenuti*/
/* week  2*/
var speler1 = document.getElementById("speler1");
var jumpRemoval

//STAP 1
    console.log(speler1);

//STAP 2
    speler1.src = "img/gorilla.png";

//STAP 3
    speler1.setAttribute("hidden","");


//STAP 4
function classDelete(){
    document.getElementById("speler2").classList.remove("jump");
}

function jump(){
    document.getElementById("speler2").classList.add("jump");
    jumpRemoval = setTimeout(classDelete, 600);
}

document.getElementById("speler2").addEventListener("click", jump);






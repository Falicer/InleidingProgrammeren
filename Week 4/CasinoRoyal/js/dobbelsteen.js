/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var rolgetal;
var imgArray = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png"];
var dobbelsteenImg;
var dobbelGeluid;
    dobbelGeluid = new Audio("sfx/shake_dice.mp3");
var throwRemoval;
var eersteWorp = 9;
var worpCheckNumber;
var zelfdeRol = 1;
var zelfdeRolGetal;

function classDelete(){
    document.querySelector("img").classList.remove("throw");
}

function worpCheck(rolGetal){
    worpCheckNumber = rolGetal+1;

    if(rolGetal % 2 == 0){
        document.querySelector('p').textContent = "Jammer, oneven. Je hebt verloren!";
    }else{
        document.querySelector('p').textContent = "Gefeliciteerd, even. Je hebt gewonnen!";
    }
    if(worpCheckNumber == 6){
        document.querySelector('p').textContent = "Feest! dubbel uitbetaald!!!!!!!";
    }
}

function jackpotCheck(laatsteWorp){
    if(laatsteWorp == eersteWorp){
        zelfdeRol++;
        zelfdeRolGetal = laatsteWorp + 1;
        document.querySelector('h1').textContent = "YES, je hebt " + zelfdeRol + "x het cijfer " + zelfdeRolGetal + " gegooit, je wint de jackpot!";
    }else{
        zelfdeRol = 1;
        document.querySelector('h1').textContent = "";
    }
}

function werp(){
    document.querySelector("img").classList.add("throw");
    rolgetal = Math.floor(Math.random() * 6);
    dobbelsteenImg = imgArray[rolgetal];
    dobbelGeluid.play();
    worpCheck(rolgetal);
    jackpotCheck(rolgetal);
    document.querySelector("img").src = "images/" + dobbelsteenImg;
    throwRemoval = setTimeout(classDelete, 500);
    eersteWorp = rolgetal;
}

document.querySelector("img").addEventListener("click", werp);

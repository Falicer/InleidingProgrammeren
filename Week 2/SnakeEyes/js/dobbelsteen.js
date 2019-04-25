/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var rolgetal;
var imgArray = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png"];
var dobbelsteenImg;
var dobbelGeluid;
    dobbelGeluid = new Audio("sfx/shake_dice.mp3");
var throwRemoval;
function classDelete(){
    document.querySelector("img").classList.remove("throw");
}

function werp(){
    document.querySelector("img").classList.add("throw");
    rolgetal = Math.floor(Math.random() * 6);
    dobbelsteenImg = imgArray[rolgetal];
    dobbelGeluid.play();
    document.querySelector("img").src = "images/" + dobbelsteenImg;
    throwRemoval = setTimeout(classDelete, 500);
}

document.querySelector("img").addEventListener("click", werp);

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var rolgetal;
var imgArray = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png"];
var dobbelsteenImg;

function werp(){

    rolgetal = Math.floor(Math.random() * 6);
    dobbelsteenImg = imgArray[rolgetal];

    document.querySelector("img").src = "images/" + dobbelsteenImg;
}

document.querySelector("img").addEventListener("click", werp);

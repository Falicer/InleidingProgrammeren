/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var rolgetal;
rolgetal = Math.floor(Math.random() * 6);

var imgArray = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png"];

var dobbelsteenImg = imgArray[rolgetal];

console.log(dobbelsteenImg);

document.querySelector("img").src = "images/" + dobbelsteenImg;

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
console.log('Wat zal ik aantrekken');

/*
Onderstaande code werkt niet omdat de regels in de verkeerde volgorde staat.

Zet de regels in de juiste volgorde.
*/

var broeken, truien ;
var broek, trui ;
var broekSrc, truiSrc ;
var broekImg, truiImg ;
var r ;

truien = ['gek', 'strak', 'warm', 'vrolijk'] ;
broeken = [ 'kort', 'hip', 'spijker'] ;

r = Math.floor( (Math.random() * truien.length ) )  ;
trui = truien[r] ;
r = Math.floor( (Math.random() * broeken.length ) )  ;
broek = broeken[r] ;

truiImg = document.getElementById('truiimg') ;
truiSrc = 'img/' + trui + '.png';
truiImg.src = truiSrc ;
broekImg = document.getElementById('broekimg') ;
broekSrc = 'img/' + broek +'.png';
broekImg.src = broekSrc ;

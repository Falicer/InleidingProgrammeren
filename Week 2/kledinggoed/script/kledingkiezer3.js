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
r = Math.floor( (Math.random() * broeken.length ) )  ;
trui = truien[r] ;
broek = broeken[r] ;

truiSrc = 'img/' + trui + '.png';
broekSrc = 'img/' + broek +'.png';
truiImg = document.getElementById('truiimg') ;
broekImg = document.getElementById('broekimg') ;
truiImg.src = truiSrc ;
broekImg.src = broekSrc ;

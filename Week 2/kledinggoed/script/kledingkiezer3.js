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

truiImg = document.getElementById('truiimg') ;
broekImg = document.getElementById('broekimg') ;

r = Math.floor( (Math.random() * truien.length ) )  ;
r = Math.floor( (Math.random() * broeken.length ) )  ;
trui = truien[r] ;
broek = broeken[r] ;

truiSrc = 'img/' + trui + '.png';
broekSrc = 'img/' + broek +'.png';

truiImg.src = truiSrc ; 
broekImg.src = broekSrc ;

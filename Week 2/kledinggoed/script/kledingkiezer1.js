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

truiImg = document.getElementById('truiimg') ;
broekImg = document.getElementById('broekimg') ;

truiImg.src = truiSrc ; 
broekImg.src = broekSrc ;

truien = ['gek', 'strak', 'warm', 'vrolijk'] ;
broeken = [ 'kort', 'hip', 'spijker'] ;

r = Math.floor( (Math.random() * truien.length ) )  ;
trui = truien[r] ;
r = Math.floor( (Math.random() * broeken.length ) )  ;
broek = broeken[r] ;

truiSrc = 'img/' + trui + '.png';
broekSrc = 'img/' + broek +'.png';


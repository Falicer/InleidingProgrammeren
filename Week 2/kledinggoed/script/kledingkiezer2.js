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

r = Math.floor( (Math.random() * truien.length ) )  ;
trui = truien[r] ;
truien = ['gek', 'strak', 'warm', 'vrolijk'] ;
truiSrc = 'img/' + trui + '.png';
truiImg = document.getElementById('truiimg') ;
truiImg.src = truiSrc ; 


r = Math.floor( (Math.random() * broeken.length ) )  ;
broek = broeken[r] ;
broeken = [ 'kort', 'hip', 'spijker'] ;
broekSrc = 'img/' + broek +'.png';
broekImg = document.getElementById('broekimg') ;
broekImg.src = broekSrc ;

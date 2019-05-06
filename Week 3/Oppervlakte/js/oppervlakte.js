/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
var oppervlakte;
var inhoud;

function berekenOppervlakte(lengteInput, breedteInput){
    oppervlakte = lengteInput * breedteInput + "cm²";
    return oppervlakte;
}

function berekenInhoud(lengteInput, breedteInput, hoogteInput){
    inhoud = lengteInput * breedteInput * hoogteInput + "cm³";
    return inhoud;
}

document.querySelector('p').textContent += berekenInhoud(10,50,20) + " ";
document.querySelector('p').textContent += berekenOppervlakte(10, 5);

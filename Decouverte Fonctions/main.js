"use strict";
function maFonction(){
    console.log('Salut!');
}

maFonction();
maFonction();
maFonction();

function maFonction2(param1, param2){
    if(typeof(param1) === "undefined" || !param1)
    param1 = 2;

    console.log('Params', param1, param2);
}

maFonction2(1, 2);
maFonction2('coucou', 2);
maFonction2(1, 1.8);

maFonction2();


//paramètre optionnel =>en > es6
function maFonction3(unParam = 2){
    console.log(unParam);
}

maFonction3();

function uneAutreFonction(){
    console.log("Une fonction");
}

var uneF = uneAutreFonction;
uneF();

function calculer(afficher){
    var resultat = 1 + 3;
    afficher(resultat);
}
/** ------------------------------------------------------------------------------------------ */
calculer(function(result){
    console.log(result);
});

/** Equivaut à <=> Equivaut à <=> Equivaut à <=> Equivaut à <=>Equivaut à <=> Equivaut à <=> Equivaut à <=>*/
// pointeur sur fonction ou delegation
function affich(result) {
    console.log(result);
}
 calculer(affich);
/** ------------------------------------------------------------------------------------------ */

calculer(function(result){
    alert(result);
});

//arrow: expression lambda

calculer( (result) => {
    alert(result);
});

calculer((result) => alert(result));
calculer(result => alert(result));

//Affichage dans 2 secondes
setTimeout(() => {
    console.log('Je m\'affiche après 2 secondes');
    setTimeout(() => {
        console.log('Je m\'affiche après 4 secondes');
    }, 2000);
}, 2000);

setTimeout(() => {
    alert('Alert m\'affiche après 6 secondes');
}, 5000);

console.log('Je passe avant ou après? réponse: avant');

setInterval(() => {
    console.log('Je me répète');
}, 1000);


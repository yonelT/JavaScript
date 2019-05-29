//"use strict";

var maVariableNouvelle = 8;

function afficherLaVariableNouvelle(unParametre){
    var uneAutreVariable = 'ca va?';
    var uneVariableIntrusive = 'Je suis intelligent'; /** Si on ne met pas le "var"  ça crée une variable GLOBALE !!!!! (sauf si on met le JS "use strict" -au début-) */
    console.log(unParametre, maVariableNouvelle, uneAutreVariable);
    if(true){
        var uneVariableDansLeIf = 'test dans le if';
        console.log(uneVariableDansLeIf);
    }
    console.log(uneVariableDansLeIf);
}

afficherLaVariableNouvelle("coucou");
//console.log(uneAutreVariable);
//console.log(uneVariableIntrusive); /** Si on ne met pas le "var"  ça crée une variable GLOBALE !!!!! Ici uneVariableIntrusive est de type global donc on peux l'utilisé meme si c'est une variable créer localement */

function utiliserLetEtConst(isOk){
    if(isOk){
        let uneVariable = 1;
        console.log('Dans le if: ', uneVariable);

        uneVariable = 3;

        const uneConstante = 8;
        //uneConstante = 9;
    }
    //console.log('Hors du if: ', uneVariable);
}

utiliserLetEtConst(true);

// this et scope

var prenomWookie = 'Chewie';

function afficher(){
    console.log(this.prenomWookie);
}

afficher();

function unTestThis(){
    console.log(this);
    setTimeout(() => {
        console.log(this);
    }, 1000);
}

unTestThis();
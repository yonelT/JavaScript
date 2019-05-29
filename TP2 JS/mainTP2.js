"use strict";

let prenom = null;
    let taille = null;
    let jourDateNaissance = null;
    let moisDateNaissance = null;
    let moisDateNaissance = null;
    let anneeDateNaissance = null;
    let dateNaissance = null;

/** 1) Fonction des demande de saisie des valeurs*/
function saisie(){
    prenom = prompt('Quel est ton prénom ?');
    taille = prompt('Quel est ta taille ? (en cm)');
    jourDateNaissance = prompt('Quel est ton jour de naissance ?');
    moisDateNaissance = prompt('Quel est ton mois de naissance ?');
    moisDateNaissance = moisDateNaissance - 1; /** -1 parce que les mois commence à 0: janvier = 0 */
    anneeDateNaissance = prompt('Quel est ton année de naissance ?');
    dateNaissance = new Date(anneeDateNaissance,moisDateNaissance,jourDateNaissance);
}
//appel fonction saisie
saisie();

/** 2) Fonction de compte rendu de la saisie (affichage)*/
function affichage(){
    console.log('Prénom: ', prenom);
    console.log('Taille: ', taille, " cm");
    console.log('Date de naissance: ', dateNaissance);
    alert('alert() Prénom: ' + prenom);
    alert('alert() Taille: ' + taille);
    alert('alert() Date de naissance: ' + dateNaissance);
}

//appel fonction affichage
affichage();

/** 2 bis) Afficher jour et mois pour la date de naissance*/


/** 3) Si la taille inférieur à 2m, dire que ce n'est pas un Wookie */
if (parseInt(taille) < 200){
    console.log('Vous n\'êtes pas un wookie');
} else {
    console.log('Vous êtes un wookie !');
}
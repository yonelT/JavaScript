/** 1) Saisie des valeurs*/
var prenom = prompt('Quel est ton prénom ?');
var taille = prompt('Quel est ta taille ? (en cm)');
var jourDateNaissance = prompt('Quel est ton jour de naissance ?');
var moisDateNaissance = prompt('Quel est ton mois de naissance ?');
moisDateNaissance = moisDateNaissance - 1; /** -1 parce que les mois commence à 0: janvier = 0 */
var anneeDateNaissance = prompt('Quel est ton année de naissance ?');
var dateNaissance = new Date(anneeDateNaissance,moisDateNaissance,jourDateNaissance);

/** 2) Compte rendu de la saisie */
console.log('Prénom: ', prenom);
console.log('Taille: ', taille, " cm");
console.log('Date de naissance: ', dateNaissance);
alert('alert() Prénom: ' + prenom);
alert('alert() Taille: ' + taille);
alert('alert() Date de naissance: ' + dateNaissance);

/** 2 bis) Afficher jour et mois pour la date de naissance*/

console.log('le jour de la date de naissance est ', dateNaissance.getDate()); /** Attention, si on utilise getDay() ça nous retourne le numéro du jour, exemple: 5 pour désigner le vendredi */
console.log('Le mois de la date de naissance est ', (dateNaissance.getMonth() + 1));

/** 3) Si la taille inférieur à 2m, dire que ce n'est pas un Wookie */
if (parseInt(taille) < 200){
    console.log('Vous n\'êtes pas un wookie');
} else {
    console.log('Vous êtes un wookie !');
}
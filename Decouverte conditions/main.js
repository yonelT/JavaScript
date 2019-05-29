
var reponse = confirm('Alors ca va toujours ?');

if(reponse){
    console.log('Ah oui, il va bien !');
} else {
    console.log('Ah flute, que pasa ?');
}

var resultat = reponse ? console.log('Ternaire ok') : console.log('Ternaire pas ok');
console.log('Valeur de resultat après un ternaire', resultat);

var uneVarNonInitialisee;
console.log('Valeur par défaut d\'une variable non initialisée', uneVarNonInitialisee);

var reponseTextuelle = prompt('Quelle âge as-tu ?');
switch (parseInt(reponseTextuelle)) { /* Ce que l'on écrit dans un prompt est récupérer sous forme de String*/
    case 18: /* donc si on ne veut pas mettre '18' on doit parser d'abord la valeur retourner par le prompt */
        console.log('Tu es trop jeune');
        break;

    case 19:
        console.log('Tu es trop jeune');
        break;

    default:
    console.log('Tu es trop vieux');
        break;
}
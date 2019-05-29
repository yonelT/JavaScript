var maVariable=12; /* ici c'est un int */
console.log('la valeur est ', maVariable);

var maVariable='12'; /* ensuite il se transforme en String */
console.log('la valeur est ', maVariable);

var maVariable='coucou';
console.log('la valeur est ', maVariable);

maVariable.toString();

var dateActuelle = new Date(); 
console.log('la date-heure courant est ', dateActuelle);

var maDateNaissance = new Date(1991, 2, 22);
console.log('Ma date de naissance est ', maDateNaissance)
console.log('getDate() est ', maDateNaissance.getDate());
console.log('getDay() est ', maDateNaissance.getDay());
console.log('getFullYear() est ', maDateNaissance.getFullYear());
console.log('getHours() est ', maDateNaissance.getHours());
console.log('getMilliseconds() est ', maDateNaissance.getMilliseconds());
console.log('getMinutes() est ', maDateNaissance.getMinutes());
console.log('getMonth() est ', maDateNaissance.getMonth());
console.log('getSeconds() est ', maDateNaissance.getSeconds());
console.log('getTime() est ', maDateNaissance.getTime());
console.log('getTimezoneOffset() est ', maDateNaissance.getTimezoneOffset());
console.log('getUTCDate() est ', maDateNaissance.getUTCDate());
console.log('getUTCDay() est ', maDateNaissance.getUTCDay());
console.log('getUTCFullYear() est ', maDateNaissance.getUTCFullYear());
console.log('getUTCHours() est ', maDateNaissance.getUTCHours());
console.log('getUTCMilliseconds() est ', maDateNaissance.getUTCMilliseconds());
console.log('getUTCMinutes() est ', maDateNaissance.getUTCMinutes());
console.log('getUTCMonth() est ', maDateNaissance.getUTCMonth());
console.log('getUTCSeconds() est ', maDateNaissance.getUTCSeconds());
console.log('Je fais un maDateNaissance.setDate(15)', maDateNaissance.setDate(15));
console.log('donc ma nouvelle getDate() est ', maDateNaissance.getDate());

console.log('Ma date de naissance en format coréen ', maDateNaissance.toLocaleDateString('ko-KR'));
console.log('Ma date de naissance en format américain', maDateNaissance.toLocaleDateString('en-US'));
console.log('Ma date de naissance en format français', maDateNaissance.toLocaleDateString('fr-FR'));

maVariableSansVar = 13;
var maVariableSansVar = 14;
console.log('la valeur de maVariableSansVar est ', maVariableSansVar);

uneVarEntiere = parseInt( prompt('Un chiffre svp') );
console.log(uneVarEntiere); // si pas nombre : NaN (Not A Number)

var uneChaine = 'coucou' + ' ca va ?';
uneChaine += maVariableSansVar + '.';

//Interpolation
var uneChaine = `coucou cava ${maVariableSansVar}. ${uneVarEntiere}`;
console.log(uneChaine);

var var1 = 1;
console.log(var1 == 1);
console.log(var1 === 1);

console.log(var1 == '1');
console.log(var1 === '1');



var unTableau = ['han solo', 'obi wan', 'anakin skywalker'];

for (var index = 0; index < unTableau.length; index++){
    var element = unTableau[index];

    console.log("Element ",index,": ", element);
}

var i = 0;
while(i <unTableau.length){
    console.log(unTableau[i]);
    i++;
}
/** ------------------------------------------------------------------------------------------------------ */
unTableau.forEach(function(element) {
    console.log(element)
});

/** Equivaut à <=> Equivaut à <=> Equivaut à <=> Equivaut à <=>Equivaut à <=> Equivaut à <=> Equivaut à <=>*/
var uneFonction = function(element){
    console.log(element);
}

unTableau.forEach(uneFonction);
/** ------------------------------------------------------------------------------------------------------ */
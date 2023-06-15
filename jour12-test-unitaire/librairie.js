function genererTitre( date ){
    const dt_fr = new Intl.DateTimeFormat("fr-FR").format(date);
    return `<h1>article publié le ${dt_fr}</h1>`;
}
// cd jour12-test-unitaire
// npx jest --watchAll
// npm run test


function fizzBuzz( chiffre ){
    if(chiffre % 3 === 0 && chiffre % 5 === 0){
        return "fizzBuzz"
    }else if(chiffre % 3 === 0){
        return "fizz";
    }else if(chiffre % 5 === 0){
        return "buzz"
    }else {
        return chiffre ;
    }
}


module.exports.genererTitre = genererTitre
module.exports.fizzBuzz = fizzBuzz

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

function getArticle( data , id ){
    const dataMapped = data.map(function(item){
        return {
            id : item.id, 
            titre : item.titre
         }
    })
    return dataMapped.find(function(item){
        return item.id === id
    })
}


module.exports.genererTitre = genererTitre
module.exports.fizzBuzz = fizzBuzz
module.exports.getArticle = getArticle

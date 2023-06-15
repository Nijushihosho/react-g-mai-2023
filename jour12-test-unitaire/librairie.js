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

// je viens de créer une nouvelle fonction que je veux tester
// si je veux tester correctement la fonction valeurAbsolue il faut AU MININUM avoir 3 test parce que il y a 3 return 
// je veux tester correctement la fonction valeurAbsolue => il faut créer 3 tests dans le fichier de test.js 
// si vous voulez vous pouvez en écrire plus 
function valeurAbsolue(chiffre){
    /* if(chiffre < 0) return chiffre * -1;
    if(chiffre > 0) return chiffre ;
    return 0 */
    return chiffre < 0 ? chiffre * -1 : chiffre ; 
}



function prixTTC(prixHT , tva){
     if(typeof prixHT !== "number"){
        throw new Error("le prixHT doit être un chiffre")
    }
    if(typeof tva !== "number"){
        throw new Error("la tva doit être un chiffre")
    } 
    return prixHT * tva ; 
}

console.log(prixTTC([] , 1.2)); 


// créer une nouvelle fonction qui s'appelle anagram
/**
Créer un nouveau fichier html ayant la balise <script>

- écrire une fonction nommée anagram qui vérifie si deux chaînes fournies sont des anagrammes l'une de l'autre; 
- la casse des lettres ne devrait pas avoir d’importance.
- En outre, ne considérez que les caractères, pas les espaces ou la ponctuation 


Voici deux exemples :
anagram('finder', 'Friend')  => true
anagram('hello', 'bye') => false
anagram('Mary', 'Army') => true
anagram('nectar', 'carnet') => true 
anagram("bonjour", 'ciao') => false 

verifier que les deux textes sont de types string 
 */



module.exports.genererTitre = genererTitre
module.exports.fizzBuzz = fizzBuzz
module.exports.getArticle = getArticle
module.exports.valeurAbsolue = valeurAbsolue
module.exports.prixTTC = prixTTC

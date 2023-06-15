const { genererTitre , 
        fizzBuzz , 
        getArticle , 
        valeurAbsolue ,
        prixTTC ,
        anagram ,
        getLargeur ,
        getArticleAvecAuteur} = require("../librairie")

test("la fonction genererTitre qui doit retourner <h1>article publié le jj/dd/aaaa</h1> pour aujourd'hui et hier" , function(){
   
        const aujourdhui = new Date() ;
        const titre1 = genererTitre(aujourdhui)
        const dt_fr = new Intl.DateTimeFormat("fr-FR").format(aujourdhui);
        expect(titre1).toBe(`<h1>article publié le ${dt_fr}</h1>`)

        const hier = aujourdhui.setDate(aujourdhui.getDate() - 1)
        const dt_fr_hier = new Intl.DateTimeFormat("fr-FR").format(hier);
        const titre2 = genererTitre(hier)
        expect(titre2).toBe(`<h1>article publié le ${dt_fr_hier}</h1>`) 
})

test("la fonction genererTitre doit contenir le texte suivant 'article publié le'" , function(){

    const titre = genererTitre(new Date());
    expect(titre).toContain("article publié le");
    expect(titre).toContain(new Intl.DateTimeFormat("fr-FR").format(new Date()));

    // matcher idéal notamment pour les fonctions qui retournent des chiffres 
    // .toBe()
    // .toBeGreatherThan()
    // .toBeGreatherThanOrEqual()
    // .toBeLessThan()
    // .toBeLessThanOrEqual()
    // .toEqual()

    // matcher idéal pour les textes 
    // toBe() => 
    // toContain()
    // toMatch() // regex 

    // matcher idéal boolean 
    // toBe()
    // toBeFalsy()
    // toBeTruthy()

    // "" false 
    // 0 false
    // undefined
    // -0
    // NaN
    // false 
    // null 

    // tableau 

    //.toContain()
    // ne pas hésiter à faire des boucles sur les tableaux
    // récupérer des propriétés .length 
    
    // objet 
    // .toMatchObject({ id : 1 }); // ressemble à l'objet 
    // .toHaveProperty("id"); // contient la propriété
    // .toHaveProperty("id", 1); 
})

// cas pratique 
// créer une fonction qui s'appelle FizzBuzz()
// retourne fizz si le chiffre est multiple de 3
// retourne buzz si le chiffre est multiple de 5
// retourne fizzbuzz si le chiffre est multiple de 5 et 3 

// créer les tests unitaires qui permettent de vérifier que la fonction est bien implémentée 

test("la fonction fizzBuzz retourne des valeurs correctes" , function(){

    const multipleDeTrois = [3,6,9,12];

    for(let chiffre of multipleDeTrois){
        const resultat = fizzBuzz(chiffre)
        expect(resultat).toBe("fizz")
    }

    const multipleDeCinq = [5,10];
    for(let chiffre of multipleDeCinq){
        const resultat = fizzBuzz(chiffre)
        expect(resultat).toBe("buzz")
    }

    const multipleDeCinqETTrois = [15,30, 45, 60];
    for(let chiffre of multipleDeCinqETTrois){
        const resultat = fizzBuzz(chiffre)
        expect(resultat).toBe("fizzBuzz")
    }

    for(let i = 15 ; i <= 1000 ; i += 15){
        const resultat = fizzBuzz(i)
        expect(resultat).toBe("fizzBuzz")
    }
})

// créer une fonction qui permet de filtrer un tableau 
// function getArticle( tableau, id  ) qui contient 2 paramètres 
// tableau [{},{},{}]
// id qui est un chiffre 

// le but de la fonction c'est de retourner un objet {   } 
// qui contient 2 propriétés id et titre 

/* [
    {id : 1 , titre : "", contenu : ""}, // 0
    {id : 1 , titre : "", contenu : ""},
    {id : 1 , titre : "", contenu : ""},
].map(function(item, key){
    re ...
}).find(function(){}) */

test("getArticle doit retourner un objet avec deux props id et titre", function(){

    const articles = [
        {id : 1 , titre : "a" , dte : new Date()}, 
        {id : 2 , titre : "b" , dte : new Date()}, 
    ];

    const resultat = getArticle( articles , 1);
    expect(resultat).toHaveProperty("id")
    expect(resultat).toHaveProperty("titre")
    expect(typeof resultat).toBe("object")

}); 

// jsonwebtoken => fin des test unitaires / test intégration 


describe("tester la fonction valeurAbsolue" , function(){

    test("si chiffre negatif retourne chiffre positif", function(){
        const resultat = valeurAbsolue(-1);
        expect(resultat).toBe(1)
    })

    test("si chiffre positif retourne chiffre positif", function(){
        const resultat = valeurAbsolue(1);
        expect(resultat).toBe(1)
    })
    
    test("si 0 retourne 0", function(){
        const resultat = valeurAbsolue(0);
        expect(resultat).toBe(0)
    })
})

describe("prixTTC" , function(){
    test("retourne un prix * tva" , function(){
        const prix = prixTTC(1,1.2);
        expect(prix).toBe(1.2);
    })
    test("retourne un valeur de types invalides" , function(){
        
        expect(function(){ prixTTC([],1.2) }).toThrow();
        expect(function(){ prixTTC("","") }).toThrow();
        expect(function(){ prixTTC("",true) }).toThrow();
        expect(function(){ prixTTC(false,"") }).toThrow();
        expect(function(){ prixTTC(true,0) }).toThrow(); 
    })
})


describe("anagram" , function(){

    test("type invalide", function(){
        expect(function(){  anagram("a" , 1) }).toThrow()
    })

    test("mot avec longueurs différentes", function(){
        expect(anagram("a" , "ab") ).toBeFalsy()
    })

    test("mots correctes", function(){
        const listes = [
            {
                mot1 : "finder",
                mot2 : "Friend",
            },
            {
                mot1 : 'Mary',
                mot2 : 'Army',
            }, 
            {
                mot1 : 'nectar',
                mot2 : 'carnet',
            }, 
            {
                mot1 : 'parisien',
                mot2 : 'aspirine',
            }
        ]
        for(let {mot1, mot2} of listes){
            expect(anagram(mot1 , mot2) ).toBeTruthy()
        }

    })


})


test("getLargeur", function(){
    return expect(getLargeur()).resolves.toBe(10)
})

test("getArticleAvecAuteur", function(){

    const getUserSimule = jest.fn().mockReturnValue({ id : 123 , nom : "azerty" })

    const resultat = getArticleAvecAuteur(getUserSimule)
     
    expect(resultat).toHaveProperty("id")
    expect(resultat).toHaveProperty("titre")
    expect(resultat).toHaveProperty("auteur")
    expect(resultat.auteur).toHaveProperty("id")
    expect(resultat.auteur).toHaveProperty("nom")

})
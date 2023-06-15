const {genererTitre} = require("../librairie")


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
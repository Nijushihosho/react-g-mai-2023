//import { hello } from "../app.js" ; // ES
const { hello , addition , getData } = require("../app")   // CommunJS 

// it("description" , function(){ } )
// it() fonction de la librairie jest 
it("la fonction hello retourne hello" , function(){
    // ici que vous allez écrire vos tests
    // si exécute le fonction hello() => retourner le texte hello
    const resultat = hello()
    expect(resultat).toBe("hello");  
})

it("addition should return 3" , function(){
    const resultat = addition(1,2)
    expect(resultat).toBe(3);
})

it("addition should return 3" , function(){
    const resultat = addition("1",2)
    expect(resultat).toBe(3);
})

it("getData n'est pas vide / contient 1 / contient que des chiffres" , function(){
    const resultat = getData();
    expect(resultat.length).toBeGreaterThan(0)
    expect(resultat).toContain(1)
    for(let item of resultat){
        expect(typeof item ).toBe("number")
    }
})


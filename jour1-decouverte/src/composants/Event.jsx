function Event(){

    // je veux réaliser associer au fait du cliquer sur le bouton 
    // une alert("bonjour")
    // il faut ajouter à la balise <button onClick={} >
    function hello(){
        alert("hello")
    }
    function total(a, b){ // dernier cas une fonction avec paramètre
        alert(a + b)
    }
    // il faut mettre une fonction anonyme dans la props onClick={} qui emballe l'exécution de la fonction total(1,2)

    return <div>
        <h2>les événements dans les composants</h2>
        <button onClick={function(){ alert("bonjour")}}>bouton 1</button>
        <button onClick={hello}>bouton 2</button>
        <button onClick={function(){ total(1,2) }}>bouton 3</button>
    </div>

}

export default Event
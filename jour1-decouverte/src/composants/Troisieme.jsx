function Troisieme(){
    const a = "Bonjour";
    const b = 10 ;
    const c = true ; // pour les boolean on ne les affichent pas directement
    //utiliser comme condition pour afficher une autre variable
    const d = [1,2,3];
    const e = { nom : "Alain" , age : 22} ;
    // avant le return je crée 5 variables 
    return <div>
        <h2 className="fs-6">afficher des variables simples</h2>
        <ul>
            <li>{ a }</li>
            <li>{ b }</li>
            { c ? <li>la condition est vraie</li> : <li>la condition est fausse</li> }
        </ul>
        <h2 className="fs-6 text-primary">afficher des variables complexes <small>array / objet</small></h2>
        <ul>
            <li>{ d }</li>{/** react va vous afficher tout le contenu du tableau */}
            <li>{ d[0] } </li> {/** uniquement la première valeur */}
            <li>{ d[2] } </li> {/** uniquement le dernier */}
            <li>{ e.age }</li> {/** Erreur  Objects are not valid as a React child  */}
            <li>{ e.nom }</li>
            {/**  il n'est pas possible d'afficher directement la variable e car il s'agit d'un objet */}
            <li>{ JSON.stringify(e) }</li>
            {/** si j'ai besoin d'afficher un objet sans passer par ses propriétés => je vais utiliser une fonction native de javascript 
             * JSON.stringify(e) 
             */}
            <li>{ JSON.stringify(d) }</li>
        </ul>

    </div>
}

export default Troisieme;
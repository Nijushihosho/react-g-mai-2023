// Dans Visual Studio il est possible d'ajouter des extensions qui permet d'ajouter "snippet"
// vous allez saisir 3 lettres + suivi de Enter 

// le fait décrire 3 lettres + enter => générer un code 

// ajouter une extension
// dans Visual Studio Code 
// snippet react 
// https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets

// imrs 
import React, { useState } from 'react';

// ffc
function Exo1() {
    const [nombre, setNombre] = useState(0)
    return ( 
        <div>
            <button onClick={function(){ setNombre(nombre -1) }}>-</button>
            <span className='mx-3 badge bg-warning'>{nombre}</span>
            <button  onClick={function(){ setNombre(nombre + 5) }}>+</button>
        </div>
     );
}

export default Exo1;
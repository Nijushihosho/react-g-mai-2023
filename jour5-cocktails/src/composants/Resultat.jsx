import React from 'react'
import Cocktail from './Cocktail'

function Resultat({resultat , filtre}) {

    function filtrage(item){
            // recherche n'importe où dans le titre 
            // return item.strDrink.toLowerCase().includes(filtre)
            // recherche tout ce qui commence par 
            const regex = new RegExp(`^${filtre}`, 'i');
            return item.strDrink.toLowerCase().match(regex)
    }
  return (
    <div style={{ display : "grid" , gridTemplateColumns : "repeat(3,1fr)", gap : "10px"}}>
        <h2 style={{ gridColumn : "1/-1" }}>Resultat {resultat.filter(filtrage).length}</h2>
        { resultat.filter(filtrage).map(function(cocktail, key){
            return <Cocktail key={key} cocktail={cocktail} />
        }) }
    </div>
  )
}

export default Resultat
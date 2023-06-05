import React from 'react'

function Cocktail({cocktail}) {
  function ingrediants(){
    const resultat = []
    for(let i = 1 ; i <= 15 ; i++){
        if(cocktail["strIngredient"+i] !== null ){
            resultat.push(<li key={i}>{cocktail["strIngredient"+i]} : {cocktail["strMeasure"+i] !== null ? cocktail["strMeasure"+i] : "???"} </li>) 
        }
    }
    return resultat ;
  }
  return (
    <div>
        <h2>{cocktail.strDrink}</h2>
        <img src={cocktail.strDrinkThumb} alt="" width={100} />
        <p>{cocktail.strInstructions}</p>
        <ul>
            {ingrediants()}
        </ul>
    </div>
  )
}

export default Cocktail
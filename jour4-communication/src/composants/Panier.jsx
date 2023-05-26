import React from 'react'

function Panier({panier , supprimerProduitduPanier}) {
    
  return (
    <div>
        <h2>votre Panier</h2>
        {panier.length === 0 
            ? 
            <p>votre panier est vide</p>  
            : <ul>
                {panier.map(function({title , price} , key){
                    return <li key={key}>{title} - {price} € - <button onClick={function(){ supprimerProduitduPanier({title})}}>supprimer produit du panier</button></li>
                })}
            </ul>  
        }
        <p>Total panier : {panier.reduce(function(total, item){ 
            return total + item.price
        } , 0)} </p>
        <button>payer</button>
    </div>
  )
}

export default Panier
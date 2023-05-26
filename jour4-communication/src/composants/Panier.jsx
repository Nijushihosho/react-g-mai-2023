import React from 'react'

function Panier({panier , supprimerProduitduPanier}) {

  return (
    <div>
        <h2>votre Panier</h2>
        {panier.length === 0 
            ? 
            <p>votre panier est vide</p>  
            : <ul>
                {panier.map(function({title , price ,qte} , key){
                    return <li key={key}>{title} - {price} € - {qte}  - <button onClick={function(){ supprimerProduitduPanier(title)}}>supprimer produit du panier</button></li>
                })}
            </ul>  
        }
        <p>Total panier : {panier.reduce(function(total, item){ 
            return total + item.price * item.qte
        } , 0)} </p>
        <button>payer</button>
    </div>
  )
}

export default Panier
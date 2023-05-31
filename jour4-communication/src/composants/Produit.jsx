import React from 'react'

function Produit({title , description , price , thumbnail, ajouterPanier}) {
  return (
    <article>
        <h2>{title}</h2>
        <img src={thumbnail} alt="" />
        <p>{description}</p>
        <footer>

        <p>{price}</p>
        <button onClick={function(){ajouterPanier({ title , price })}}>ajouter au panier</button>
        </footer>
    </article>
  )
}

export default Produit
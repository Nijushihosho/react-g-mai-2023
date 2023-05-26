import React from 'react'

function Produit({title , description , price , thumbnail}) {
  return (
    <article>
        <h2>{title}</h2>
        <img src={thumbnail} alt="" />
        <p>{description}</p>
        <p>{price}</p>
    </article>
  )
}

export default Produit
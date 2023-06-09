import React , {useContext} from 'react'
import { PanierContext } from '../context/PanierContext'

function Catalogue() {
    const {add} = useContext(PanierContext)

    const catalogue = [
        {id : 1 , nom : "PS4" , prix : 500},
        {id : 2 , nom : "Nintendo DS" , prix : 600}
    ]

  return (
    <div>
        {catalogue.map(function(produit, key){
            return <article key={key}>
                <h2>{produit.nom}</h2>
                <p>prix : {produit.prix} €</p>
                <button onClick={() => add(produit)}>Ajouter au panier</button>
            </article>
        })}
    </div>
  )
}

export default Catalogue
import React , {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
function ProduitSingle() {
    const {id, title} = useParams() ; // permet de récupérer la partie variable dans l'url :id/:title définis dans le router 
    const [produit, setProduit] = useState({});
    useEffect( function(){ // useEffect() => React => hook 
        // permet de remplir la variable produit via une requete ajax au moment du chargement du composant dans le DOM 
        fetch(`https://dummyjson.com/products/${id}`)
            .then(function(reponse){ return reponse.json()})
            .then(function( data ){ setProduit(data)})
    } , [])
  return (
    <div>ProduitSingle {id}, {title}
        <pre>{ JSON.stringify(produit , null , "  ")}</pre> 
        
    </div>
  )
}

export default ProduitSingle
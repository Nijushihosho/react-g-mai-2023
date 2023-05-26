import {useState, useEffect} from 'react'
import "./Exo1.css"
import Produit from './Produit'

function Exo1() {
    const [catalogue, setCatalogue] = useState([])
    const [panier, setPanier] = useState([])
    useEffect(function(){
        fetch("https://dummyjson.com/products")
            .then(function(reponse){ return reponse.json()})
            .then(function({products}){ 
                const produitsMappe = products.map(function({title , description , price , thumbnail}){
                    return {title , description , price , thumbnail}
                })
                setCatalogue(produitsMappe); 
             })
    } , [])

    function ajouterPanier(produit){
        const clonePanier = structuredClone(panier);
        clonePanier.push(produit);
        setPanier(clonePanier); 
    }
  return (
    <div>Exo1
        {<pre>{JSON.stringify(panier , null , "  ")}</pre>}
        <section className='exo1'>
        { catalogue.map(function(  {title , description , price , thumbnail}, key){
            return (
                <Produit 
                    title={title} 
                    description={description} 
                    price={price} 
                    thumbnail={thumbnail} 
                    key={key} 
                    ajouterPanier={ajouterPanier}
                />
            )
            
        })}
        </section>
    </div>
  )
}

export default Exo1
import React , {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import slug from "slug"

function Produits() {
    const [produits , setProduits ] = useState([]);
    useEffect( function(){
        fetch("https://dummyjson.com/products")
            .then(function(reponse){ return reponse.json()})
            .then(function({products}){ setProduits(products) })
    } , [])
  return (
    <div className='container'>
        <h1>Produits</h1>
       {/*  <pre>{ JSON.stringify(produits , null , "  ")}</pre> */}
       <div className='row'>
        { 
            produits.map(function(item , key){
                return <article className='col-3' key={key}>
                    <h2 className='fs-4'>{ item.title }</h2>
                    <img src={item.thumbnail} alt="" className='img-fluid' style={{ height: "150px" , objectFit : "cover" }} />
                    <p>{item.category}</p>
                    <Link to={`/produits/${item.id}/${slug(item.title)}`} className='btn btn-sm btn-success mb-3'>plus de détails</Link>
                    { /** Iphone X  => iphone-x slugify
                     * stopper el serveur Ctrl + C
                     * npm i slug 
                     * relancer le serveur 
                     * import slug from "slug"
                     * 
                     *   */ }
                </article>
            })
        }
         </div>
    </div>
  )
}

export default Produits
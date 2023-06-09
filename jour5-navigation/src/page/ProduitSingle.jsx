import React , {useEffect, useState , useContext} from 'react'
import { useParams , Link } from "react-router-dom"
import "../assets/ProduitSingle.css"; 
import { PanierContext } from '../context/PanierContext';

function ProduitSingle() {
    const {add} = useContext(PanierContext);
    const {id} = useParams() ; // permet de récupérer la partie variable dans l'url :id/:title définis dans le router 
    
    const [produit, setProduit] = useState({});
    useEffect( function(){ // useEffect() => React => hook 
        // permet de remplir la variable produit via une requete ajax au moment du chargement du composant dans le DOM 
        fetch(`https://dummyjson.com/products/${id}`)
            .then(function(reponse){ return reponse.json()})
            .then(function( data ){ setProduit(data)})
    } , [])

    const [lightBox, setLightBox] = useState( { show : false , img : ""} )

    function showLightBox(url){
        setLightBox({ show : true , img : url })
    }
    function hideLightBox(){
        setLightBox({ show : false , img : "" })
    }
  return (
    <div>
        { lightBox.show && <div className='light-box' onClick={hideLightBox}>
            <button>fermer</button>
            <img src={lightBox.img} alt="" />
        </div>  }
    { Object.keys(produit).length > 0 && <div className='container'>
    <section className="row mt-4">
        <figure className="col-4">
            <img src={produit.thumbnail} alt="" className='img-fluid mb-3' onClick={ function(){ showLightBox(produit.thumbnail) }} />
            <div className="row" >
                {produit.images && produit.images.map(function(item, key){
                    return <div className='col-3'  key={key}>
                        <img src={item} alt=""  className='mw-100 border border-primary' onClick={ function(){ showLightBox(item) }} />
                    </div>
                }) }
            </div>
            <div className='text-center mt-3'>
                <Link to="/produits" className='btn btn-danger btn-sm'>Retour aux produits</Link>
            </div>
        </figure>
        <div className="col-8">
            <h1>{produit.title}</h1>
            <p>{produit.description}</p>
            <p>prix : {new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(produit.price)  }</p>
            <p>marque : {produit.brand}</p>
            <button 
                className='btn btn-success btn-lg'
                onClick={function(){ add(produit) }}
            >Ajouter au panier</button>
        </div>
    </section>
</div>}
</div>
  )
}

export default ProduitSingle
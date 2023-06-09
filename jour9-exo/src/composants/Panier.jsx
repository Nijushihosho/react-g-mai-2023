import React , {useContext} from 'react'
import { PanierContext } from '../context/PanierContext'

function Panier() {
  const {getPanier} = useContext(PanierContext)
  return (
    <div>
      {getPanier().length === 0 ? <p>Panier est vide</p> : 
      <pre>{JSON.stringify(getPanier(), null , "  ")}</pre>}
      <p>total : <br />
      { getPanier().reduce(function( total , item ){
        return total + item.qte * item.prix
      } , 0) } €</p>
      
    </div>
  )
}

export default Panier
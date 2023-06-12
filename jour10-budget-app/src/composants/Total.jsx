import React , {useContext} from 'react'
import {OperationContext} from "../context/OperationContext"
function Total() {
 const {operations} = useContext(OperationContext)
  return (
    <div>
        <h1>Total</h1>
        <p>{ operations.reduce(function(total , item){ 
            return total + item.montant
        } , 0) }</p>
    </div>
  )
}
export default Total
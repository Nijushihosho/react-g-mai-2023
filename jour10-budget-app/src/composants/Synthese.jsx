import React , {useContext} from 'react'
import {OperationContext} from "../context/OperationContext"

function Synthese() {
    const {operations} = useContext(OperationContext)
  return (
    <div>
        <h2>Synthese</h2>
        <section className='synthese'>
            <div>
                <h3>Revenus</h3>
                <p>{operations.filter(function(item){ return item.montant >= 0}).reduce(function(total, item){return total + item.montant} , 0)}</p>
            </div>
            <div>
                <h3>Dépenses</h3>
                <p>{operations.filter(function(item){ return item.montant < 0}).reduce(function(total, item){return total + item.montant} , 0)}</p>
            </div>
        </section>
    </div>
  )
}

export default Synthese
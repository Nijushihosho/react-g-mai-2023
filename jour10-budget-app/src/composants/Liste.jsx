import React , {useContext} from 'react'
import {OperationContext} from "../context/OperationContext"

function Liste() {
    const {operations} = useContext(OperationContext)
  return (
    <div>
        <h2>Détail des opérations</h2>
        <table>
            <thead>
                <tr>
                    <th>#id</th>
                    <th>#nom</th>
                    <th>#montant</th>
                    <th>#action</th>
                </tr>
            </thead>
            <tbody>
                { 
                    operations.map(function(item , key){
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.nom}</td>
                            <td>{item.montant}</td>
                            <td>
                                <button className='modifier me-3'>modifier</button>
                                <button className='supprimer'>supprimer</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Liste
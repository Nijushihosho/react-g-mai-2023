import React , {useContext , useState } from 'react'
import {OperationContext} from "../context/OperationContext"
import { isNumeric } from '../utils'

function Liste() {
   
    const {operations , supprimer , update} = useContext(OperationContext)
    const [id, setId] = useState(0)
    const [localOperation, setLocalOperation] = useState({})

    function modif(e){
        const cloneLocalOperation = structuredClone(localOperation);
        cloneLocalOperation[e.target.name] = e.target.value
        setLocalOperation(cloneLocalOperation)
    }   

    function submit(e){
        e.preventDefault();

        if(localOperation.nom.length < 3 || !isNumeric(localOperation.montant) ){
            alert("formulaire invalide");
            return ;
        } 
       
        update(localOperation);
        setId(0)
    }

    function dragStart(e){
        e.target.classList.add("deplacer")
    }

    function dragEnd(e){
        e.target.classList.remove("deplacer")
    }

    function onDragOver(e){
        e.preventDefault()
        e.stopPropagation();
        e.target.appendChild(document.querySelector(".deplacer"))
    }

    
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
                <tbody onDragOver={onDragOver}>
                { 
                    operations.map(function(item , key){
                        return < tr key={key} onDragStart={dragStart} onDragEnd={dragEnd} draggable={true}>
                            { item.id === id 
                            ?
                            <>
                                <td colSpan={4}>
                                <form className='form-modif' onSubmit={submit}>
                                    <input type="hidden" name="id" value={localOperation.id} />
                                    <input type="text" name="nom" value={localOperation.nom} onChange={ modif} />
                                    <input type="text" name="montant" value={localOperation.montant}  onChange={modif} />
                                    <input type="submit" value="go" />
                                </form>
                                </td>
                            </>
                            : 
                            <>
                                <td>{item.id}</td>
                                <td>{item.nom}</td>
                                <td>{item.montant}</td>
                                <td>
                                    <button className='modifier me-3' onClick={function(){ setId(item.id) ; setLocalOperation(item) }}>modifier</button>
                                    <button className='supprimer' onClick={function(){ supprimer(item) }}>supprimer</button>
                                </td>
                            </>
                            }
                        </tr>
                    })
                }
                </tbody>
           
        </table>
    </div>
  )
}

export default Liste
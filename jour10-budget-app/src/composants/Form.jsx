import React , {useContext} from 'react'
import { isNumeric } from '../utils';
import {OperationContext} from "../context/OperationContext"

function Form() {
  const {add} = useContext(OperationContext)
  function submit(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if(data.nom.length < 3 || !isNumeric(data.montant) ){
      alert("formulaire invalide");
      return ;
    } 
    data.montant = Number(data.montant);
    add(data);
    e.target.reset();
  }
  return (
    <div>
      <h2>Ajouter une nouvelle opération</h2>
      <form onSubmit={submit} className='form-add'>
        <input type="text" placeholder="nom opération" name="nom" />
        <input type="text" placeholder="montant opération" name="montant" />
        <input type="submit" value="ajouter"/>
      </form>
    </div>
  )
}

export default Form
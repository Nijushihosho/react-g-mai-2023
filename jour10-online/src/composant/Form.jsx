import React, {useRef} from 'react'
import { db } from '../config'
import {collection, addDoc} from "firebase/firestore"
function Form({setUpdate}) {
    const refTitre = useRef()
    function submit(e){
        e.preventDefault();
        
        // INSERT VERSION Firebase ! 
        addDoc(collection(db , "notes"), { titre : refTitre.current.value })
        setUpdate(function(update){
          return !update
        })
        e.target.reset()
    }
  return (
    <div>
        <h2>ajouter</h2>
        <form onSubmit={ submit }>
            <input type="text" name="titre" placeholder="saisir un titre" ref={refTitre} />
            <input type="submit" value="ajouter"/>
        </form>
    </div>
  )
}

export default Form
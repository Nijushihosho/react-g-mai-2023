import React , {useContext} from 'react'
import {db} from "../config/firebase"
import {addDoc , collection} from "firebase/firestore"
import { AuthContext } from '../context/AuthContext';
import { LangContext } from '../context/LangContext'; 

function Form({setUpdate}) {
    const {user} = useContext(AuthContext)
    const {allLang} = useContext(LangContext)

    async function submit(e){
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        /* if(data.titre.length < 3 || data.body.length < 3){
            alert("attention formulaire invalide")
            return ;
        } */
        data.dt_creation = new Date(); // Date.now()
        data.dt_update = new Date(); 
        data.status = true ; 
        data.auteur = user.displayName ;
        await addDoc(collection(db , "articles"), data)
        
        e.target.reset();
        setUpdate(function(prevState){ return !prevState})
    }

  return (
    <div>
        <form  onSubmit={submit}>
            {allLang.map(function(item, key){
                return <div key={key} className='form-add mb-3'>
                    <input type="text" name={`titre-${item}`} placeholder={`saisir le titre en ${item}`} />
                    <textarea name={`body-${item}`} cols="30" rows="10" placeholder={`saisir le contenu de l'article en ${item}`}></textarea>
                </div>
            })}
            
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form
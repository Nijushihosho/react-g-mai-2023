import React, {useEffect , useState} from 'react'
import { db } from '../config'
import { collection, getDocs } from "firebase/firestore"

function Liste({update}) {
    const [notes, setNotes] = useState([]);
    useEffect(function(){ 
        async function getDocuments(){
            const data = await  getDocs(collection(db , "notes"))
            return data.docs.map(function(doc){
                return doc.data()
            }) 
        }
        getDocuments().then(function(donnees){
            setNotes(donnees);
        });
    } , [update])
  return (
    <div>
        <h2>Liste</h2>
        {notes.map(function(note, key){
           return <p key={key}>{note.titre}</p>
        })}
    </div>
  )
}

export default Liste
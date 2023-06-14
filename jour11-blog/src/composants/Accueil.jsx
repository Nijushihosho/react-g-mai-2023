import React , {useContext , useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import  Form  from './Form';
import {db} from "../config/firebase"
import { collection, getDocs } from "firebase/firestore";


function Accueil({nom}) {
  const getNotes = async () => {
      const notesSnapshot = await getDocs(collection(db, "articles"));
      const notesList = notesSnapshot.docs.map((doc) => {
        return {...doc.data(), id : doc.id}
      });
      setArticles(notesList);
  };

  const [articles, setArticles] = useState([])
  useEffect( function(){
    getNotes()
  }, [])

  const {isLogged} = useContext(AuthContext);
  return (
    <div>
      <h1>Bienvenue {nom}</h1>
      {isLogged() && <Form />}
      <main>
        { articles.map(function(item, key){
          return <article key={key}>
            <h2>{item.titre}</h2>
            <p>{item.body}</p>
            <p>{item?.dt_creation && "Publié le : "} {item?.dt_creation && new Intl.DateTimeFormat("fr-FR").format(new Date(item?.dt_creation?.seconds *1000))}</p>
            {isLogged() && <>
              <button className='me-3'>update</button>
              <button>delete</button>
            </>}
          </article>
        }) }
      </main>
    </div>
  )
}

export default Accueil
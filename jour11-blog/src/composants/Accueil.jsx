import React , {useContext , useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import  Form  from './Form';
import {db} from "../config/firebase"
import { collection, getDocs } from "firebase/firestore";


function Accueil({nom}) {
  const getNotes = async () => {
      const notesSnapshot = await getDocs(collection(db, "articles"));
      const notesList = notesSnapshot.docs.map((doc) => doc.data());
      return notesList;
  };

  const [articles, setArticles] = useState([])
  useEffect( function(){

    getNotes().then(function(data) { 
      setArticles(data)
    })
  }, [])

  const {isLogged} = useContext(AuthContext);
  return (
    <div>
      <h1>Bienvenue {nom}</h1>
      {isLogged() && <Form />}
      <pre>{JSON.stringify(articles, null, " ")}</pre>
    </div>
  )
}

export default Accueil
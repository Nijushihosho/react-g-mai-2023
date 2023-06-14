import React , {useContext , useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import {LangContext } from "../context/LangContext"
import  Form  from './Form';
import {db} from "../config/firebase"
import { collection, getDocs , doc , deleteDoc , updateDoc  } from "firebase/firestore";
import mario from "../assets/mario.jpg"


function Accueil({nom}) {
  const {isLogged} = useContext(AuthContext);
  const {lang} = useContext(LangContext);

  const [articles, setArticles] = useState([])
  const [update, setUpdate] = useState(true)
  const [id , setId] = useState(0)
  const [localArticle, setLocalArticle]= useState({})

  const getNotes = async () => {
      const notesSnapshot = await getDocs(collection(db, "articles"));
      let  notesList = notesSnapshot.docs.map((doc) => {
        return {...doc.data(), id : doc.id }
      });
      notesList.sort(function(a, b){
        
        return new Date(b.dt_creation.seconds *1000) - new Date(a.dt_creation.seconds *1000);
      })
      setArticles(notesList);
  };

  useEffect( function(){
    getNotes()
  }, [update])
  
  function modifier(id , article){
    setId(id)
    setLocalArticle(article)
  }

  async function supprimer(id){
    const ref = doc(db, "articles", id)
    await deleteDoc(ref)
    setUpdate(!update);
  }
  function change(e){
    const cloneLocalArticle = structuredClone(localArticle)
    cloneLocalArticle[e.target.name] = e.target.value;
    setLocalArticle(cloneLocalArticle); 
  }
  async function submit(e){
    e.preventDefault();
    if(localArticle.titre.length < 3 || localArticle.body.length < 3){
      alert("attention formulaire invalide")
      return ;
    }
    const ref = doc(db, "articles", localArticle.id);
    localArticle.dt_update = new Date(); 
    await updateDoc(ref, localArticle);
    setUpdate(!update);
    setId(0);
  }

  const optionsFormatDate = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  return (
    <div>
      <h1>Bienvenue {nom}</h1>
      {isLogged() ? <Form setUpdate={setUpdate} /> : <section className='g-2 mb-3'>
        <img src={mario} alt="" className='max-w'/>
        <img src="pikachu.jpg" alt="" className='max-w'/>
        <img src="https://via.placeholder.com/700x200" alt="" className='max-w'/>
      </section>}
      <main>
        { articles.map(function(item, key){
          return <article key={key}>
            { id === item.id ? <form className='form-add' onSubmit={submit}>
                <input type="hidden" name="id" value={localArticle.id} />
                <input type="text" value={localArticle.titre} name="titre" onChange={function(e){ change(e) }}/>
                <textarea value={localArticle.body} name='body' rows={5} onChange={function(e){ change(e) }}></textarea>
                <input type='submit' value="mettre à jour" />
            </form> :
              <>
                <h2>{item["titre-"+lang] ? item["titre-"+lang] : item["titre"] }</h2>
                  <p>{item["body-"+lang ] ? item["body-"+lang] : item["body"]}</p>
                  <p>{item?.dt_creation && "Publié le : "} {item?.dt_creation && new Intl.DateTimeFormat(lang+"-"+lang.toUpperCase() , optionsFormatDate ).format(new Date(item?.dt_creation?.seconds *1000))}</p>
                  {isLogged() && <>
                    <button className='me-3' onClick={ function(){ modifier(item.id , item) }  }>update</button>
                    <button onClick={function(){ supprimer(item.id)  }}>delete</button>
                  </>}
              </>
            }
            
          </article>
        }) }
      </main>
    </div>
  )
}

export default Accueil
import React , {useState, useEffect} from 'react'
import "./ListeArticle.css"

function ListeArticle({updateListe , setUpdateListe}) {
    const [posts , setPosts] = useState([])
    useEffect( function(){
        //console.log("exécution fetch")
        fetch("http://localhost:4200/articles")
        .then(function(reponse){ return reponse.json()})
            .then(function(data){
                setPosts(data)
            })
        
    } , [updateListe])

    function supprimer(id){
        const option = {
            method: "DELETE"
        }
        fetch(`http://localhost:4200/articles/${id}` , option)
            .then(function(reponse){ return reponse.json() })
            .then(function(){ 
                setUpdateListe(function(update){ return !update})
            })
    }

  return (
    <div className='articles'>
        <h2>ListeArticle</h2>
        { posts.map(function(item, key){
            return <article key={key}>
            <h2>{item.titre}</h2>
            <p>{item.body}</p>
            <button className='me-3'>modifier</button>
            <button onClick={function(){  supprimer(item.id)  }}>supprimer</button>
        </article>
        }) }
    </div>
  )
}

export default ListeArticle
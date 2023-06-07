import React , {useState, useEffect} from 'react'
import "./ListeArticle.css"

function ListeArticle({updateListe}) {
    const [posts , setPosts] = useState([])
    useEffect( function(){
        console.log("exécution fetch")
        fetch("http://localhost:4200/articles")
        .then(function(reponse){ return reponse.json()})
            .then(function(data){
                setPosts(data)
            })
        
    } , [updateListe])
  return (
    <div className='articles'>
        <h2>ListeArticle</h2>
        { posts.map(function(item, key){
            return <article key={key}>
            <h2>{item.titre}</h2>
            <p>{item.body}</p>
        </article>
        }) }
    </div>
  )
}

export default ListeArticle
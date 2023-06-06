import React , {useState, useEffect}  from 'react'

function Accueil() {
  const [posts , setPosts] = useState([]);
  useEffect(function(){
    fetch("https://dummyjson.com/posts")
      .then(function(reponse){ return reponse.json()})
      .then(function({posts}) { setPosts(posts)})
  } , [])

  return (
    <div className='container'>
      Accueil
     {/*  <pre>{JSON.stringify(posts , null , "  ")}</pre> */}
     <div className='row'>
     {posts.map(function(item, key){
        return <article key={key} className='col-4'>
           <h2 className='fs-5'>{item.title}</h2>
           {item.tags.map(function(tag, cle){
            return <span key={cle} className='badge bg-warning mx-2'>{tag}</span>
           })}
           <p>nb commentaire {item.reactions}</p> 
           <hr />
        </article>
      })}
    </div>
     {/** 
      * dans le composant accueil veuillez réaliser une requête ajax vers la adresse suivante 
      * https://dummyjson.com/posts => 150 articles 
      * afficher dans le composant 
      * <article>
      *   <h2>titre</h2>
      *   tag1 tag2 tag3 
      *   nb commentaire 
      * </article>
      */}
    </div>
  )
}

export default Accueil
import React , {useEffect , useState} from 'react'
function Liste({update , setUpdate}) {
  const [taches, setTaches] = useState([]);
  const [id, setId] = useState(0);
  const [traitementUpdate, setTraitementUpdate] = useState(false);
  useEffect( function(){
    fetch("http://localhost:4200/todo")
      .then(function(reponse){ return reponse.json()})
      .then(function(data){
        setTaches(data)
      })
  } , [update])

  function supprimer (todo){
    fetch(`http://localhost:4200/todo/${todo.id}`, {method : "DELETE"})
    .then(function(reponse){ return reponse.json()})
    .then(function(){
      setUpdate(function(update){ return !update})
    })
  }

  function modifier( todo ){
    setId(todo.id)
  }

  function change(item, e){
    const cloneTaches = structuredClone(taches);

    const tacheAModifier =  cloneTaches.find(function(element){
      return element.id === item.id
    })
    const index = cloneTaches.indexOf(tacheAModifier);
    cloneTaches[index][e.target.name] = e.target.value ;
    setTaches(cloneTaches)
  }

  function submit (e, todo){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if(data.titre.length < 3 ) {
      alert("formulaire invalid")
      return 
    }
    data.status = todo.status ;
    setTraitementUpdate(true)
    const option = {method : "PUT", body : JSON.stringify(data) , headers : {"content-type" : "application/json"} }
    
    fetch(`http://localhost:4200/todo/${todo.id}`, option)
      .then(function(reponse){ return reponse.json()})
      .then(function(){
        setId(0)
        setTraitementUpdate(false)
      })

  }

  function barrer(todo){
    const cloneTaches = structuredClone(taches);

    const tacheAModifier =  cloneTaches.find(function(element){
      return element.id === todo.id
    })
    const index = cloneTaches.indexOf(tacheAModifier);
    cloneTaches[index].status = !cloneTaches[index].status;
    
    todo.status = !todo.status

    const option = {method : "PUT", body : JSON.stringify(todo) , headers : {"content-type" : "application/json"} }
    
    fetch(`http://localhost:4200/todo/${todo.id}`, option)
      .then(function(reponse){ return reponse.json()})
      .then(function(){
        setTaches(cloneTaches)
      })

  }

  return (
    <div>
      <h2>Listes des tâches </h2>
      <ol>
      {taches.map(function(item , key){
        return <li key={key} draggable={true}>
          { item.id === id ? <form className='d-flex' onSubmit={function(e) { submit(e, item)}}>
            <input type="submit" value="go" disabled={traitementUpdate} />
            <input type="text" value={item.titre} onChange={function(e){ change(item, e) }} name="titre" />
          </form> 
          : 
          <>
            <button onClick={function(){ supprimer (item)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
          </svg>
          </button> 
          <button className='m-1' onClick={ function(){ modifier( item )} }>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-recycle" viewBox="0 0 16 16">
            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
          </svg>
          </button>
          <span onDoubleClick={ function(){ barrer(item) } }>
            {item.status ? item.titre : <del>{item.titre}</del>}
          </span>
          </>  
        }

           
        </li>
      })}
      </ol>
    </div>
  )
}
export default Liste
import React , {useState} from 'react'

function Formulaire({setUpdate}) {
  const [traitement , setTraitement] = useState(false);

  function submit(e){
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    if(data.titre.length < 3 ) {
      alert("formulaire invalid")
      return 
    }
    data.status = true ;

    const option = {method : "POST", body : JSON.stringify(data) , headers : {"content-type" : "application/json"} }
    setTraitement(true)
    fetch("http://localhost:4200/todo", option)
      .then(function(reponse){ return reponse.json()})
      .then(function(){
        e.target.reset()
        setTraitement(false)
        setUpdate(function(update){ return !update })
      })
  }

  return (
    <div>
      <h1>Ajouter une nouvelle tâche</h1>
      <form onSubmit={submit}>
        <input type="text" name="titre" placeholder='saisir le nom de tâche' />
        <input type="submit" value={'ajouter une nouvelle tâche'}/>
      </form>
      <p>{traitement && <p className='loader'>traitement en cours</p>}</p>
    </div>
  )
}

export default Formulaire
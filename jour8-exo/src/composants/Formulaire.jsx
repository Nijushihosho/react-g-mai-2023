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

    if(data.status){
      data.status = false ;
    }else {
      data.status = true ;
    }


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

  function change(e){
    console.log(e.target.checked)
  }

  return (
    <div>
      <h1>Ajouter une nouvelle tâche</h1>
      <form onSubmit={submit}>
        <input type="text" name="titre" placeholder='saisir le nom de tâche' />
        <label htmlFor="status">
          <input type="checkbox" id="status" name="status" onClick={change}/> status de la tâche
        </label> 
        <br />
        <br />
        <input type="submit" value={'ajouter une nouvelle tâche'}/>
      </form>
      <div>{traitement && <p className='loader'>traitement en cours</p>}</div>
    </div>
  )
}

export default Formulaire
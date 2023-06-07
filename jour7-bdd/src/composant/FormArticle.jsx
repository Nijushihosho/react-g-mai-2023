import React from 'react'
import "./FormArticle.css"
function FormArticle() {
    let formulaireArticle = {titre : "" , body : ""}
    function change(e){
        formulaireArticle[e.target.name] = e.target.value
    }

    function submit(e){
        e.preventDefault();
        if( formulaireArticle.titre.length < 3 || formulaireArticle.body.length < 3){
            alert("formulaire invalide")
            return
        }  
        // je veux réaliser un INSERT dans la base de données 
        // fetch
        // GET
        // POST => envoyer des informations vers le serveur 
        const option = {
            method: "POST",
            body : JSON.stringify(formulaireArticle),
            headers : {
                "content-type" : "application/json"
            }
        }
        fetch("http://localhost:4200/articles" , option)
            .then(function(reponse){ return reponse.json()})
            .then(function(data){console.log(data)})
    }

  return (
    <div>
        <form  onSubmit={submit}>
            <div>
                <input type="text" placeholder='titre' name="titre" onChange={change}/>
            </div>
            <div>
                <textarea name="body" id="body" cols="30" rows="10" placeholder='body' onChange={change}></textarea>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>

    </div>
  )
}

export default FormArticle
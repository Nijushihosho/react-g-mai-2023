import React from 'react'
import Joi from "joi"; // zod // yup
// npm i react-toastify
import { toast , ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function NousContacter() {
  let dataForm = { email : "", sujet : "" , commentaire : ""  }

  function formData(e){
    dataForm[e.target.name] = e.target.value ;
  }
  function submit(e){
    // bloquer le rehargement automatique de la page suite à la soumission
    e.preventDefault();
    // si je clique la page ne se charge pas 

    // lorsque je soumets le formulaire 
    // je dois récupérer les valeurs saisies du formulaire
    dataForm

    // pour réaliser rapidement ET facilement de nombreuses vérifications sur un objet => librairie joi
    // npm i joi (d'autre lib yup zod ) 
    // npm run dev

    // vérifier qu'elles sont correctes 
    const schema = Joi.object({
      email : Joi.string().min(3).max(255).email({tlds:{allow: false}}).required().messages({
        "string.min" : "email doit contenir au minimun 3 lettres",
        "string.max" : "email doit contenir au maximum 255 lettres",
        "string.email" : "email soumis n'est pas valide",
        "string.empty" : "le champ email est obligatoire"
      }),
      sujet : Joi.string().min(3).max(255).required(),
      commentaire : Joi.string().min(3).max(1000).required(),
    })
    // la variable schema contient 13 vérifications 
    console.log(schema.validate(dataForm, {abortEarly :false}))
    const {error} = schema.validate(dataForm, {abortEarly :false})
    if(!error){
      console.log("insert dans la base de donnée");
      // afficher dans la console
      // par la suite => INSERT dans une base de données 
      // vider le formulaire 
      e.target.reset();
      dataForm = { email : "", sujet : "" , commentaire : ""  }
      // afficher une bandeau en haut du formulaire qui dit "merci pour le message on revient vers vous au plus vite "
      // nous allons utiliser une librairie react-toastify
      // npm i react-toastify
      //
      toast.success("merci pour le message on revient vers vous au plus vite" )
    } else {
      // si c'est pas correct => non 
      for(let msg of error.details){
        toast.error( msg.message )
      }
    }
    console.log(resultat); 
  }

  
  return (
    <div className='container'>
      <h1>Nous Contacter</h1>
      <p>Vous avez des questions, nous avons les réponses !</p>
      <ToastContainer />
      <form onSubmit={submit}>
        <div className='form-floating mb-3'>
          <input type="email" className='form-control' id="email" placeholder='votre@email.fr' onChange={formData} name="email"/>
          <label htmlFor="email">votre email</label>
        </div>
        <div className='form-floating mb-3'>
          <input type="text" className='form-control' id="sujet" placeholder='le sujet du message' onChange={formData} name="sujet"/>
          <label htmlFor="sujet">votre sujet</label>
        </div>
        <div className='form-floating mb-3'>
          <textarea name="commentaire" id="commentaire" className='form-control' placeholder='le commentaire' style={{ height : "150px" }} onChange={formData} ></textarea>
          <label htmlFor="commentaire">votre commentaire</label>
        </div>
        <div className='mb-3 d-flex justify-content-end'>
          <input type="submit" className='btn btn-info' value="Envoyer la demande d'information"/>
        </div>
      </form>
    </div>
  )
}

export default NousContacter
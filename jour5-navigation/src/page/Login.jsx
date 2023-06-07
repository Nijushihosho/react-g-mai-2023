import React  from 'react'
import "./Login.css"
import Joi from "joi"
import {toast, ToastContainer} from "react-toastify"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigation = useNavigate()
  let  credentials = {login : "" , password : ""} ;
  function getFormData(e){
    credentials[e.target.name] = e.target.value
  }
  function submit(e){
    e.preventDefault(); // bloquer le changement automatique de la page

    // vérifier que les données saisies sont confirmes aux attendus
    const schema = Joi.object({
      login : Joi.string().alphanum().min(3).max(255).required() , 
      password : Joi.string().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/).required().messages({
        "string.pattern.base" : "le password doit contenir 8 lettres avec des Majuscules, des minuscules et des chiffres"
      } )
    });
    // console.log(schema.validate(credentials , {abortEarly: false}));
    const {error} = schema.validate(credentials , {abortEarly: false})

    if(!error){
      //toast.success("bienvenu");
      e.target.reset();
      credentials = {login : "" , password : ""} ;
      navigation("/admin"); // redirection vers le composant <Dashboard />
    } else {
      for(let msg of error.details){
        toast.error( msg.message + " 😒")
      }
    }
  }


  return (
    <div className='container'>
      <h1 className='text-center my-5'>Login</h1>
      <form className='grid-form' onSubmit={submit}>
          <input type="text" name="login" placeholder='votre login' className='form-control me-3' onChange={getFormData}/>
          <input type="password" name="password" placeholder='votre password' className='form-control' onChange={getFormData} />
        <div>
          <input type="submit" className='btn btn-outline-dark'/>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login
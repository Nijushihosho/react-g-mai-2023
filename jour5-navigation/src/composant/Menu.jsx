import React from 'react'
import {Link} from "react-router-dom"

function Menu() {
  return (
    <div className='menu'>
        <Link to="/">Accueil</Link>
        <Link to="/contacter">Nous Contacter</Link>
        <Link to="/login">Connexion</Link>
    </div>
  )
}

export default Menu
import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu'>
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/login">Connexion</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu
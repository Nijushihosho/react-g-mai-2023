import React from 'react'
import { Link } from "react-router-dom"

function Menu() {
  return (
    <div className='bg-primary'>
      <nav className='navbar navbar-expand container navbar-dark'>
        <span className='navbar-brand'>Navigation</span>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to="/" className='nav-link'>Accueil</Link>
          </li>
          <li className='nav-item'>
            <Link to="/produits" className='nav-link'>Produits</Link>
          </li>
          <li className='nav-item'>
            <Link to="/contacter" className='nav-link'>Nous Contacter</Link>
          </li>
        </ul>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link to="/login" className='nav-link'>Connexion</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
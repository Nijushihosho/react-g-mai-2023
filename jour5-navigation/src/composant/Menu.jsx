import React , {useContext} from 'react'
import { Link } from "react-router-dom"
import { PanierContext } from '../context/PanierContext'


function Menu() {
  const {getPanier} = useContext(PanierContext); 

  return (
    <div className='bg-primary'>
      <nav className='navbar navbar-expand container navbar-dark px-3'>
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
          <li className='nav-item'>
            <Link to="/contacter" className='nav-link'>
              Panier
              <span className='badge bg-danger'>{ getPanier().length }</span>
            </Link>
          </li>
        </ul>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link to="/login" className='nav-link'>Connexion</Link>
          </li>
          <li className='nav-item'>
            <Link to="/admin" className='nav-link'>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
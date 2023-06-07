import React from 'react'
import { Link } from 'react-router-dom'

function MenuDashboard() {
  return (
    <ul className='list-group'>
        <li className='list-group-item'>
            <Link to="/" className='link-underline-light fs-4'>Accueil du site</Link>
        </li>
        <li className='list-group-item'>
            <Link to="/admin"  className='link-underline-light fs-4'>Accueil du BO</Link>
        </li>
        <li className='list-group-item'>
            <Link to="/"  className='link-underline-light fs-4'>Gestion des Users</Link>
        </li>
    </ul>
  )
}

export default MenuDashboard
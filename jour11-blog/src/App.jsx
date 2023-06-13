import React from 'react'
import Menu from './composants/Menu'
import { Outlet } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div className='container'>
      <Menu />
      <Outlet />
    </div>
  )
}

export default App

// créer un Composant Menu qui contient 2 liens 
// Accueil => /
// Login => /login 
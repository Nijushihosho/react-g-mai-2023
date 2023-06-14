import React from 'react'
import Menu from './composants/Menu'
import { Outlet } from 'react-router-dom'
import "./App.css"
import { AuthContextProvider } from './context/AuthContext'
import { LangContextProvider } from './context/LangContext'

function App() {
  return (
    <LangContextProvider>
      <AuthContextProvider>
        <div className='container'>
          <Menu />
          <Outlet />
        </div>
      </AuthContextProvider>
    </LangContextProvider>
  )
}

export default App

// créer un Composant Menu qui contient 2 liens 
// Accueil => /
// Login => /login 
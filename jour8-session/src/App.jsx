import React from 'react'
import Menu from './composants/Menu'
import Accueil from './composants/Accueil'
import { ConnexionContextProvider } from './context/connexionContext'

function App() {
  return (
    <ConnexionContextProvider>
      <div>
        <h1>App</h1>
        <Menu />
        <Accueil />
      </div>
    </ConnexionContextProvider>
  )
}

export default App
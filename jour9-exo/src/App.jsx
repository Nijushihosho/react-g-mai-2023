import React from 'react'
import Panier from "./composants/Panier"
import Accueil from "./composants/Accueil"
import { PanierContextProvider } from './context/PanierContext'

function App() {
  return (
    <div>
      <PanierContextProvider>
        <h1>Exo Panier</h1>
        <Panier />
        <Accueil />
      </PanierContextProvider>
    </div>
  )
}

export default App
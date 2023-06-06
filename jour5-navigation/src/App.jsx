import React from 'react'
import Menu from './composant/Menu'
import { Outlet } from 'react-router-dom'

function App() { // Layout 
  return (
    <div>
      <Menu />
      <Outlet /> {/** c'est ce composant qui va devenir le composant <Accueil /> si vous cliquez sur le lien accueil dans <Menu /> */}
    </div>
  )
}

// 1ère étape => nous allons créer 3 composants
// composant => 
// créer un dossier page 
export default App
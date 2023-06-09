import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter , Routes , Route } from "react-router-dom"
import Accueil from './page/Accueil'
import NousContacter from './page/NousContacter'
import Login from './page/Login'
import Produits from './page/Produits'
import ProduitSingle from './page/ProduitSingle'
import Dashboard from './page/Dashboard'
import AppDashboard from './composant/AppDashboard'
import Panier from './page/Panier'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/** il s'agit du router */}
      <Routes> 
        <Route  path='/' element={<App />} >
          <Route index element={<Accueil />} />
          <Route path="produits/" >
            <Route index element={<Produits />} />
            <Route path=":id/:title" element={<ProduitSingle />} />
          </Route>
          <Route path="panier" element={<Panier />} />
          <Route path="contacter" element={<NousContacter />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<AppDashboard />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
      {/** fin il s'agit du router */}
    </BrowserRouter>
  </React.StrictMode>
)

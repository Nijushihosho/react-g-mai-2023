import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Accueil from './composants/Accueil'
import Login from './composants/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Accueil />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

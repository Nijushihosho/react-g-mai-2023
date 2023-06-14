import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Login from './composants/Login'
import Test from './composants/Test'
import WhatIsUseRef from './composants/WhatIsUseRef'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Test />} />
          <Route path="login" element={<Login />} />
          <Route path="use-ref" element={<WhatIsUseRef />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

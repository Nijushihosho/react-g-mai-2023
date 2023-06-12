import React from 'react'
import Total from './composants/Total'
import Synthese from './composants/Synthese'
import Liste from './composants/Liste'
import Form from './composants/Form'
import { OperationContextProvider } from './context/OperationContext'
import "./style.css"

function App() {
  return (
    <OperationContextProvider>
      <div className='container'>
        <Total />
        <hr />
        <Synthese />
        <hr />
        <Liste />
        <hr />
        <Form />
      </div>
    </OperationContextProvider>
  )
}

export default App
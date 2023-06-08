import React, {useState} from 'react'
import Formulaire from './composants/Formulaire'
import Liste from './composants/Liste'
import "./style.css"


function App() {
  const [update, setUpdate] = useState(true)
  return (
    <div className='container' >
      <Formulaire setUpdate={setUpdate}/>
      <Liste update={update} setUpdate={setUpdate}/>
    </div>
  )
}

export default App
import React , {useState} from 'react'
import Form from './composant/Form'
import Liste from './composant/Liste'

function App() {
  const [update, setUpdate] = useState(true)
  return (
    <div>
      <h1>App utilisant Firebase</h1>
      <Form setUpdate={setUpdate}/>
      <Liste update={update}/>
    </div>
  )
}

export default App
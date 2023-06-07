import React , {useState} from 'react'
import FormArticle from './composant/FormArticle'
import ListeArticle from './composant/ListeArticle'
import "./App.css"

function App() {
  const [updateListe , setUpdateListe] = useState(false)
  return (
    <div>
      <h1>App</h1>
      <main className='app'>
        <FormArticle setUpdateListe={setUpdateListe}/>
        <ListeArticle updateListe={updateListe} setUpdateListe={setUpdateListe}/>
      </main>
    </div>
  )
}

export default App
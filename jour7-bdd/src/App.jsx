import React , {useState} from 'react'
import FormArticle from './composant/FormArticle'
import ListeArticle from './composant/ListeArticle'
import "./App.css"
import { Suspense } from 'react'

function App() {
  const [updateListe , setUpdateListe] = useState(false)
  return (
    <div>
      <h1>App</h1>
      <main className='app'>
        <FormArticle setUpdateListe={setUpdateListe}/>
        <Suspense fallback={<p>loading</p>}>
          <ListeArticle updateListe={updateListe} setUpdateListe={setUpdateListe}/>
        </Suspense>
      </main>
    </div>
  )
}

export default App
import React , { useEffect , useState } from 'react'
import Input from './composants/Input'
import Resultat from './composants/Resultat'

function App() {

  const [resultat, setResultat] = useState([]) 
  const [filtre, setFiltre] = useState(""); 

  useEffect( function(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(function(reponse){ return reponse.json()})
      .then(function({drinks}){ setResultat(drinks)})
  }, [])

  return (
    <div>
      <h1>Rechercher un cocktail</h1>
        <Input setFiltre={setFiltre}/>
      
        <Resultat resultat={resultat} filtre={filtre}/>
    </div>
  )
}

export default App
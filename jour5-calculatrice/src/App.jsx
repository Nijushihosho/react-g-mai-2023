// rfce
import React, {useState} from 'react'
import Input from './composants/Input'
import Button from './composants/Button'

function App() {
  // Attention il est FORTEMENT déconseillé d'utiliser 
  // document.querySelector().addEventListener() dans un composant React 
  const [nb1, setNb1] = useState(0);
  const [nb2, setNb2] = useState(0);
  const [numbers , setNumbers] = useState({nb1 : 0, nb2 : 0 });
  const [resultat, setResultat] = useState("");

  function modifNb(item){
    const cloneNumbers = {...numbers};
    cloneNumbers["nb"+item.id] = item.nb ;
    setNumbers(cloneNumbers);
    console.log(numbers)
  }

  function addition(){
    const n1 = new Intl.NumberFormat("fr-Fr").format(numbers.nb1)
    const n2 = new Intl.NumberFormat("fr-Fr").format(numbers.nb2)
    const total = new Intl.NumberFormat("fr-Fr").format(numbers.nb1 + numbers.nb2)
    const affichage = `addition de ${n1} + ${n2} = ${total}`
    setResultat( affichage );
  }
  function multiplication(){
    const n1 = new Intl.NumberFormat("fr-Fr").format(numbers.nb1)
    const n2 = new Intl.NumberFormat("fr-Fr").format(numbers.nb2)
    const total = new Intl.NumberFormat("fr-Fr").format(numbers.nb1 * numbers.nb2)
    const affichage = `multiplication de ${n1} x ${n2} = ${total}`
    setResultat( affichage );
  }
  function reset(){
    setNumbers({nb1 : 0, nb2 : 0 })
    //setNb2(0)
    setResultat("")
  }

  return (
    <div>
      <h1>Calculatrice</h1>
      <p>{resultat}</p>
      <Input label={'number 1'} modifNb={modifNb} nb={numbers.nb1} id={1}/>
      <Input label={'number 2'} modifNb={modifNb} nb={numbers.nb2} id={2}/>
      <Button nom={'addition'} action={addition} disabled={numbers.nb1 !==0 && numbers.nb2 !== 0 ? false : true}/>
      <Button nom={'multiplication'} action={multiplication} disabled={numbers.nb1 !==0 && numbers.nb2 !== 0 ? false : true}/>
      <Button nom={'reset'} action={reset} disabled={false}/>
    </div>
  )
}

export default App
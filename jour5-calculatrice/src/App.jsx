// rfce
import React, {useState} from 'react'
import Input from './composants/Input'
import Button from './composants/Button'

function App() {
  const [nb1, setNb1] = useState(0);
  const [nb2, setNb2] = useState(0);
  const [resultat, setResultat] = useState("");

  function addition(){
    const n1 = new Intl.NumberFormat("fr-Fr").format(nb1)
    const n2 = new Intl.NumberFormat("fr-Fr").format(nb2)
    const total = new Intl.NumberFormat("fr-Fr").format(nb1 + nb2)
    const affichage = `addition de ${n1} + ${n2} = ${total}`
    setResultat( affichage );
  }
  function multiplication(){
    const n1 = new Intl.NumberFormat("fr-Fr").format(nb1)
    const n2 = new Intl.NumberFormat("fr-Fr").format(nb2)
    const total = new Intl.NumberFormat("fr-Fr").format(nb1 * nb2)
    const affichage = `multiplication de ${n1} x ${n2} = ${total}`
    setResultat( affichage );
  }
  function reset(){
    setNb1(0)
    setNb2(0)
    setResultat("")
  }

  return (
    <div>
      <h1>Calculatrice</h1>
      <p>{resultat}</p>
      <Input label={'number 1'} setNb={setNb1} nb={nb1}/>
      <Input label={'number 2'} setNb={setNb2} nb={nb2}/>
      <Button nom={'addition'} action={addition} disabled={nb1 !==0 && nb2 !== 0 ? false : true}/>
      <Button nom={'multiplication'} action={multiplication} disabled={nb1 !==0 && nb2 !== 0 ? false : true}/>
      <Button nom={'reset'} action={reset} disabled={false}/>
    </div>
  )
}

export default App
import React , {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import  Form  from './Form';

function Accueil() {
  const {isLogged} = useContext(AuthContext);
  return (
    <div>
      <h1>Accueil</h1>
      {isLogged() && <Form />}
    </div>
  )
}

export default Accueil
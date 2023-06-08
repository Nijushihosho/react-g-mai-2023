import React , {useContext} from 'react'
import {ConnexionContext} from "../context/connexionContext"

function Menu() {
  const { user , setUser } = useContext(ConnexionContext)
  function deconnexion(){
    setUser(function(prevUser){
      const cloneUser = structuredClone(prevUser);
      cloneUser.isLogged = false
      return cloneUser; 
    })
  }
  return (
    <div>
      { user.isLogged ? <>
        Dashboard 
        <button onClick={ deconnexion}>deconnexion</button>
      </> :
        <>Login</> 
      }
      {/* {JSON.stringify(user)} */}
    </div>
  )
}

export default Menu
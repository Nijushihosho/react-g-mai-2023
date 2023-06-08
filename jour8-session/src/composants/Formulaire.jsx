import React , {useRef , useContext} from 'react'
import { ConnexionContext } from "../context/connexionContext"
function Formulaire() {
  const {user , setUser} = useContext(ConnexionContext)

  const refLogin = useRef()
  const refPassword = useRef()
  function submit(e){
    e.preventDefault()
    const data = {
      login : refLogin.current.value ,
      password : refPassword.current.value
    }
    if(data.login.length < 3 || data.password.length <3){
      alert("formulaire invalid")
      return ; 
    }
    // maintenant que l'on a récupérer les valeurs saisies
    // il faut comparer les valeurs saisies dans  le formulaire par rapport aux données que l'on aurait dans une base de données
    // si les données correspondent => l'utilisateur est connecté  
    // sinon  => retourner un message les identifiants sont incorrectes
    if(data.login == user.login && data.password == user.password){
      setUser(function(prevUser){
        const cloneUser = structuredClone(prevUser);
        cloneUser.isLogged = true
        return cloneUser; 
      })
    }

    // console.log(data);  
  }
  return (
    <div>
      <h2>connexion</h2>
      { user.isLogged 
        ? 
        <p>Bienvenue</p>
        : 
      <form onSubmit={submit}>
        <input type="text" name="login" placeholder='login' ref={refLogin} />
        <br />
        <input type="password" name='password' placeholder='password' ref={refPassword} />
        <br />
        <input type="submit" value="connexion"/>
      </form>
      }
      

      {/** si l'utilisateur saisit 
       * login : toto@yahoo.fr et password 1234  => l'utilisateur est authentifié 
       * ET le menu va changer 
       *  à la place du texte Login il va y avoir le texte back office et un bouton de déconnexion 
       * et le formulaire devient un p qui contient le texte bonjour
       * 
       * si je clique que le bouton deconnexion dans le menu => 
       * le texte redevient Login et le formulaire réapparait 
       * */}
    </div>
  )
}

export default Formulaire
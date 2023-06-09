// pas un composant qui s'affiche 
// mais c'est un composant qui permet de partager des informations entre composant 
import { createContext , useState } from "react"
export const ConnexionContext = createContext(); // $_SESSION
// state MAIS utilisable sur PLUSIEURS composants 
export const ConnexionContextProvider = function({children}){
    const [user, setUser] = useState({ 
        login : "toto@yahoo.fr",
        password : "1234",
        isLogged : false
    })

    function login(data){
        // maintenant que l'on a récupérer les valeurs saisies
        // il faut comparer les valeurs saisies dans  le formulaire par rapport aux données que l'on aurait dans une base de données
        // si les données correspondent => l'utilisateur est connecté  
        // sinon  => retourner un message les identifiants sont incorrectes
        
        // console.log(data); 
        if(data.login == user.login && data.password == user.password){
            /* setUser(function(prevUser){
              const cloneUser = structuredClone(prevUser);
              cloneUser.isLogged = true
              return cloneUser; 
            }) */
            const cloneUser = structuredClone(user)
            cloneUser.isLogged = true ;
            delete cloneUser.password ; // sécurité 
            localStorage.setItem("auth" , JSON.stringify(cloneUser))
            setUser(cloneUser); 
          }
    }

    function logout(){
        setUser(function(prevUser){
            const cloneUser = structuredClone(prevUser);
            localStorage.removeItem("auth") // ; ça supprimer 
            cloneUser.isLogged = false
            return cloneUser; 
          })
    }

    function isLogged(){
        if( localStorage.getItem("auth")  && JSON.parse(localStorage.getItem("auth")).isLogged ){
            return true ; 
        }
        return user.isLogged 
    }

    return <ConnexionContext.Provider value={{login, logout , isLogged}}>
        {children}
    </ConnexionContext.Provider>
}
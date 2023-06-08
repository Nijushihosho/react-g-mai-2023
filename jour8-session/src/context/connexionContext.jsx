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
    return <ConnexionContext.Provider value={{user, setUser}}>
        {children}
    </ConnexionContext.Provider>
}
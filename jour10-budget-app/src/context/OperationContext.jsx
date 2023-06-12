import { createContext , useState , useEffect } from "react";

export const OperationContext = createContext();

export function OperationContextProvider ({ children }){

    const [operations,setOperations] = useState([])

    useEffect( function(){
        fetch("http://localhost:4200/operations")
            .then(function(reponse){ return reponse.json()})
            .then(function(data){  setOperations(data) })
    }, [])

    return <OperationContext.Provider value={{operations}}>
        {children}
    </OperationContext.Provider>

}
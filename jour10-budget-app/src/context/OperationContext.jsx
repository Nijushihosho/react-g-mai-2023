import { createContext , useState , useEffect } from "react";

export const OperationContext = createContext();

export function OperationContextProvider ({ children }){

    const [operations,setOperations] = useState([])

    useEffect( function(){
        fetch("http://localhost:4200/operations")
            .then(function(reponse){ return reponse.json()})
            .then(function(data){  setOperations(data) })
    }, [])

    function add(item){
        const options = { 
                method :"POST", 
                body : JSON.stringify(item),
                headers : { "content-type" : "application/json"}
        }
        fetch("http://localhost:4200/operations" , options )
            .then(function(reponse){return reponse.json()})
            .then(function(data){ 
                const cloneOperation = structuredClone(operations)
                //item.id = Math.ceil(Math.random() * 100000)
                cloneOperation.push(data);
                setOperations (cloneOperation);
            })
    }

    function supprimer (ope){
        // réalise une requête ajax vers la base de données 
        // requête DELETE pour élément qui a l'id ope.id
        const options = { method : "DELETE" }
        fetch(`http://localhost:4200/operations/${ope.id}`, options)
            .then(function(reponse){ return reponse.json()})
            .then(function(){
                // effectué une mis à jour du state operations
                const cloneOperation = structuredClone(operations)
                const index = cloneOperation.findIndex(function(item){
                    return item.id === ope.id
                });
                cloneOperation.splice(index, 1); // suppression
                setOperations(cloneOperation);
            })
    }

    function update(item){
        item.id = Number(item.id)
        item.montant = Number(item.montant)
        const options = { 
            method :"PUT", 
            body : JSON.stringify(item),
            headers : { "content-type" : "application/json"}
    }
    fetch(`http://localhost:4200/operations/${item.id}` , options )
        .then(function(reponse){return reponse.json()})
        .then(function(){ 
            const cloneOperation = structuredClone(operations)
            const index = cloneOperation.findIndex(function(ope){
                return item.id === ope.id
            });
            cloneOperation.splice(index, 1, item);
            setOperations (cloneOperation);
        })
    }

    return <OperationContext.Provider value={{operations , add , supprimer , setOperations, update}}>
        {children}
    </OperationContext.Provider>

}
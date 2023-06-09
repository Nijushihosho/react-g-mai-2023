import {createContext, useState} from "react"

export const PanierContext = createContext();

export function PanierContextProvider({children}){
    let panierInitial = []
    if(localStorage.getItem("panier")){
        panierInitial = JSON.parse(localStorage.getItem("panier"))
    }
    const [panier, setPanier] = useState(panierInitial);

    function add(produit){
        const clonePanier = structuredClone(panier);
        // je recherche si le produit est déjà présent dans le panier
        const produitRecherche = clonePanier.find(function(item){
            return item.id === produit.id
        })
        if(produitRecherche){
            // si oui => augmenter de + 1 la propriété qte
            const index = clonePanier.indexOf(produitRecherche);
            clonePanier[index].qte++
        }else{
            // sinon j'ajoute au produit une prop qte = 1
            produit.qte = 1;
            clonePanier.push(produit);
        }
        localStorage.setItem("panier", JSON.stringify(clonePanier))
        setPanier(clonePanier);
    }

    function getPanier(){
        return panier
    }

    return <PanierContext.Provider value={{ getPanier, add }}>
        {children}
    </PanierContext.Provider>

}
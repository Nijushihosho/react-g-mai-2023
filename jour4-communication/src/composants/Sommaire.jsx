// rfce
import { useState } from 'react'
import Compteur from './Compteur'

function Sommaire() {
    const [compteurs , setCompteurs] = useState([
        { nb : 0 ,couleur : '#2ecc71', id : 2},
        { nb : -3 ,couleur : '#9b59b6' , id : 3},
        { nb : 10 ,couleur : '#FF0000' , id : 1},
    ])

    function augmenter(id){
       const cloneCompteurs = structuredClone(compteurs);
       // rechercher dans le tableau 
       const compteurAModifier = cloneCompteurs.find(function(item){
        return item.id === id
       })
       // récupérer la position
       const index = cloneCompteurs.indexOf(compteurAModifier)
       // modification => augmentation 
       cloneCompteurs[index].nb++;
       // efectue la mise à jour du state 
       setCompteurs(cloneCompteurs); // à besoin d'un tableau qui a une reférence mémoire différente pour être exécutée  
    }

    function diminuer(id){
      const cloneCompteurs = structuredClone(compteurs);
      const compteurAModifier = cloneCompteurs.find(function(item){
        return item.id === id
      })
      const index = cloneCompteurs.indexOf(compteurAModifier);
      cloneCompteurs[index].nb-- ;
      setCompteurs(cloneCompteurs); 
    }

  return (
    <div>
        <h2>Sommaire</h2>
        {compteurs.map(function({nb, couleur , id} , key){
            return  <Compteur 
                            nb={nb} 
                            couleur={couleur} 
                            key={key} 
                            id={id}
                            augmenter={augmenter}
                            diminuer={diminuer}
                            />
        })}
        
        {/** nb est une props (rappel les attributs d'une balise html)
         * vous êtes libre de l'appeler comme vous voulez 
         * https://colorhunt.co/
         * https://picular.co
         * https://flatuicolors.com/
         * https://color.adobe.com
           */}
       {/*  <Compteur nb={ 0 } couleur={'#2ecc71'}/>
        <Compteur nb={ -3 } couleur={'#9b59b6'}/> */}
    </div>
  )
}

export default Sommaire
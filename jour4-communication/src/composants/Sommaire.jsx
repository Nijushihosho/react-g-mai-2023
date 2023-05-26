// rfce
import React from 'react'
import Compteur from './Compteur'

function Sommaire() {
    const compteurs = [
        { nb : 10 ,couleur : '#FF0000'},
        { nb : 0 ,couleur : '#2ecc71'},
        { nb : -3 ,couleur : '#9b59b6'},
        { nb : -3 ,couleur : '#9b59b6'},
        { nb : -3 ,couleur : '#9b59b6'},
        { nb : -3 ,couleur : '#9b59b6'},
        { nb : -3 ,couleur : '#9b59b6'},
        { nb : 22 ,couleur : '#00ee00'},
        { nb : -3 ,couleur : '#9b59b6'},
        { nb : 44 ,couleur : '#0000FF'},
        { nb : -3 ,couleur : '#9b59b6'},
        { nb : -3 ,couleur : '#9b59b6'},
        { nb : -3 ,couleur : '#9b59b6'},
    ]

  return (
    <div>
        <h2>Sommaire</h2>
        {compteurs.map(function({nb, couleur} , key){
            return  <Compteur nb={nb} couleur={couleur} key={key} />
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
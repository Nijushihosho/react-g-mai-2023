// rfce
import React from 'react'
import Compteur from './Compteur'

function Sommaire() {
  return (
    <div>
        <h2>Sommaire</h2>
        <Compteur nb={10} couleur={'#FF0000'} />
        {/** nb est une props (rappel les attributs d'une balise html)
         * vous êtes libre de l'appeler comme vous voulez 
         * https://colorhunt.co/
         * https://picular.co
         * https://flatuicolors.com/
         * https://color.adobe.com
           */}
        <Compteur nb={ 0 } couleur={'#2ecc71'}/>
        <Compteur nb={ -3 } couleur={'#9b59b6'}/>
    </div>
  )
}

export default Sommaire
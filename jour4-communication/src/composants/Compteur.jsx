import React from 'react'

function Compteur({nb, couleur , id , augmenter}) {

  return (
    <div>
        Compteur {nb} 
        <button 
            style={ { background : couleur }}
            onClick={() => augmenter(id)}
        >augmenter</button>
        {/* <pre>{JSON.stringify(props , null , "   ")}</pre> */}
    </div>
  )
}

export default Compteur
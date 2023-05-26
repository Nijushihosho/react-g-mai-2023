import React from 'react'

function Compteur({nb, couleur , id , augmenter , diminuer}) {

  return (
    <div>
        Compteur {nb} 
        <button 
            style={ { background : couleur }}
            onClick={() => augmenter(id)}
        >augmenter</button>
        <button onClick={() => diminuer(id)}>
          diminuer
        </button>
        {/* <pre>{JSON.stringify(props , null , "   ")}</pre> */}
    </div>
  )
}

export default Compteur
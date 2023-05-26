import React from 'react'

function Compteur({nb, couleur}) {

  return (
    <div>
        Compteur {nb} 
        <button style={ { background : couleur }}>augmenter</button>
        {/* <pre>{JSON.stringify(props , null , "   ")}</pre> */}
    </div>
  )
}

export default Compteur
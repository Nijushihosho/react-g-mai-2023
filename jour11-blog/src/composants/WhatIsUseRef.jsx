import React , {useRef , useState} from 'react'

function WhatIsUseRef() {

  const [nb , setNb] = useState(0)
  const chiffre = useRef(0)
  const refP = useRef() // document.querySelector("p")

  return (
    <div>
        <button onClick={ function(){ setNb(nb+1);
            refP.current.style["font-size"] = `${nb *10}px`
            refP.current.innerHTML = "texte modifié avec du js"
        }}>modif state</button>
        <p>{nb}</p>
        <button onClick={ function() { {
            chiffre.current += 1
            console.log(chiffre.current)
        } }}>modif ref</button>
        <p>{chiffre.current}</p>
        <p ref={refP}>bonjour les amis</p>
    </div>
  )
}

export default WhatIsUseRef
import React from 'react'

function Input({setFiltre}) {
  return (
    <input type="text" placeholder='filtrer les cocktails' onInput={function(e){ setFiltre(e.target.value.toLowerCase()) }}/>
  )
}

export default Input
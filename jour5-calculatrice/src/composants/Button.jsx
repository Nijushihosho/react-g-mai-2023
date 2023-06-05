import React from 'react'

function Button({nom , action , disabled}) {
  return (
    <button onClick={action} disabled={disabled}>{nom}</button>
  )
}

export default Button
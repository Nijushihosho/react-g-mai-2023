import React from 'react'

function Form() {
  return (
    <div>
      <h2>Ajouter une nouvelle opération</h2>
      <form>
        <input type="text" placeholder="nom opération" name="nom" />
        <input type="text" placeholder="montant opération" name="motant" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form
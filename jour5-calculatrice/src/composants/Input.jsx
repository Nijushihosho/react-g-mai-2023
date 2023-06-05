import React from 'react'
function Input({label , modifNb, nb , id}) {
    function recupSaisie(e){
        // attention les chiffres saisies dans un formulaire
        // sont transformés en string 1234 => "1234"
        // console.log( Number( e.target.value) ) // "1234" => 1234
        // setNb( Number( e.target.value) ); 
        
        modifNb({ id : id , nb : Number( e.target.value) })
    } 
  return (
    <div>
        <label htmlFor={`element${id}`}>{label} : </label>
        {/* <input type="text" id="element" onInput={function(e){
            console.log(e.target.value)
        }} /> */}
        <input type="text" id={`element${id}`} onInput={recupSaisie} value={nb === 0 ? "" : nb} />
    </div>
  )
}

export default Input
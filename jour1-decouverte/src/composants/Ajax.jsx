import React, { useState , useEffect } from 'react';
function Ajax() {
    const [quotes, setQuotes] = useState([]);  // valeur locale
    useEffect( function(){ 
        fetch("https://dummyjson.com/quotes") // requête ajax
            .then(function(reponse){ return reponse.json()})
            .then(function(data){ 
                setTimeout(function(){
                    setQuotes(data.quotes) // remplir le state local avec les données 
                } , 2000) 
            })
    } )
    return <div className='row'>
        {quotes.map(function({quote , author}, key){
                    return <article key={key} className='col-3'>
                        <blockquote>{quote}</blockquote>
                        <p>{author}</p>
                    </article>
        })}
    </div>;
}

export default Ajax;

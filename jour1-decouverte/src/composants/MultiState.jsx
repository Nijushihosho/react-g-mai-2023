import React, { useState } from 'react';


function MultiState() {
    // vous pouvez avez dans un composant plusieurs useState
    const [zoom, setZoom] = useState(100) ; 
    const [show, setShow] = useState(true) ;
    return ( 
        <div>
            {
            show &&  <img src="https://via.placeholder.com/400x200" alt="" width={zoom} />
            }
            <br />
            <button onClick={function(){ setZoom(zoom + 100) }}>zoom +</button>
            <button onClick={function(){ setShow( !show )}}>afficher masquer</button>
        </div>

     );
}

export default MultiState;
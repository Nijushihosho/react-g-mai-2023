function Cinquieme(){

    const prix = [1,2,3,4];
    const panier = [ // tableau d'objet => collection 
        { id : 1 , nom : "PS5" , prix : 500 , qte : 2 },
        { id : 2 , nom : "Nintendo DS" , prix : 300 , qte : 1 }
    ];

    // affiché dans la vue du composant le jsx suivant
    // <div>
    // <ul>
    //   <li>1</li>
    //   <li>2</li>
    //   <li>3</li>
    //   <li>4</li>
    // </ul>
    // </div>
    return <div>
        <ul>
            <li>{ prix[0] }</li>
            <li>{ prix[1] }</li>
            <li>{ prix[2] }</li>
            <li>{ prix[3] }</li>
        </ul>
        <h2 className="fs-6">faire une boucle dans react</h2>
        <ul>
            { prix.map(function(item , key){
                return <li key={key}>{item}</li>
            }) }
        </ul>
        <h2>total de prix</h2>
        <p>{ prix[0] + prix[1] + prix[2] + prix[3]  } </p>
        <p>{ prix.reduce(function(total , item){
            return total + item
        } , 0)  }</p>
        <h2>afficher les prix supérieurs ou égal à 3</h2>
        <p>{ prix.filter(function(item){
                    return item >= 3
            }).map(function(item , key){
                return <p key={key}> {item} </p>
            }) 
        }</p>
        <h2 className="fs-5">filtre un panier </h2>
        <div>
            { panier.filter(function(item){
                return item.prix > 400
                    }).map(function(item, key){
                        return <p key={key}>{item.nom} {item.prix}</p>
                    }) }
        </div>
        <h2 className="fs-5">total du panier</h2>
        <p>{ panier.reduce(function(total, item){
                return total + item.prix * item.qte
            } , 0) } €</p>
    </div>

}
    // cas pratique afficher l'ensemble des produits du panier dont le prix unitaire est > 400 euros 

export default Cinquieme ;
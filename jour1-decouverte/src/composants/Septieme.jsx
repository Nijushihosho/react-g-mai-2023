function Septieme(){
    const stockMagasin = [
        {title : "iPhone 9", price : 549 , stock : 94},
        {title : "iPhone 10", price : 1000 , stock : 60},
        {title : "Nokia", price : 50 , stock : 20},
    ] ;
    return <div>
        <h1 className="fs-5">produits disponibles dont le stock est supérieur à 50</h1>
        { stockMagasin.map(function(item, key){
            return <p key={key}>{item.stock > 50 && `${item.title} - ${item.price} €`}</p>
        }) }
    </div>
}
export default Septieme ;
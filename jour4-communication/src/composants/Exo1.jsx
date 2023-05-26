import {useState, useEffect} from 'react'
import "./Exo1.css"

function Exo1() {
    const [data, setData] = useState([])
    useEffect(function(){
        fetch("https://dummyjson.com/products")
            .then(function(reponse){ return reponse.json()})
            .then(function({products}){ 
                const produitsMappe = products.map(function({title , description , price , thumbnail}){
                    return {title , description , price , thumbnail}
                })
                setData(produitsMappe); 
             })
    } , [])
  return (
    <div>Exo1
        {/* <pre>{JSON.stringify(data , null , "  ")}</pre> */}
        <section className='exo1'>
        { data.map(function(  {title , description , price , thumbnail}, key){
            return <article key={key}>
                <h2>{title}</h2>
                <img src={thumbnail} alt="" />
                <p>{description}</p>
                <p>{price}</p>
            </article>
        })}
        </section>
    </div>
  )
}

export default Exo1
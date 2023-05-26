import {useState, useEffect} from 'react'
import "./Exo1.css"
import Produit from './Produit'

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
            return (
                <Produit title={title} description={description} price={price} thumbnail={thumbnail} key={key}/>
            )
            
        })}
        </section>
    </div>
  )
}

export default Exo1
import React , {useContext} from 'react'
import { PanierContext } from '../context/PanierContext'

function Panier() {
  const {getPanier} = useContext(PanierContext); 
  return (
    <div className='container'>
        <h1>Votre Panier</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>#id</th>
                    <th>#image</th>
                    <th>#title</th>
                    <th>#prix unitaire</th>
                    <th>#qte</th>
                    <th>#total</th>
                </tr>
            </thead>
            <tbody>
                { getPanier().map(function(item , key){
                    return <tr key={key}>
                        <td>{ item.id }</td>
                        <td><img src={item.thumbnail} alt="" width={100}/></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.qte}</td>
                        <td>{item.qte * item.price}</td>
                    </tr>
                }) }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5} className='text-end'> total Panier</td>
                    <td className='bg-dark text-white'>
                        { getPanier().reduce(function(total, item){
                            return total + item.price * item.qte
                        }, 0) }
                        
                    </td>
                </tr>
            </tfoot>
        </table>

    </div>
  )
}

export default Panier
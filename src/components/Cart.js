import { Link } from 'react-router-dom';
import React,{ Fragment, useContext} from 'react'
import { CartContext } from "../context/CartContext";

function Cart(prod) {
    const { cart, clear, removeItem,precioTotal} = useContext(CartContext)
    

    
    return (
           <Fragment>
                {!cart.length ? (<Link to="/"><button>carrito vacio, compre algo</button></Link>)
                :
                (<div>
                    {cart.map(prod =>  <div> 
                                <h1>{ prod.item.nombre }</h1>
                                
                                <img src={prod.item.pictureUrl} width="400px"></img>
                                <h4>la cantidad es: { prod.quantity}</h4>
                                       
                                <button onClick={()=>removeItem(prod.item.id)} >X</button>
                                </div>)}

            <h3>${precioTotal()}</h3>
            <button onClick={clear} >vaciar carrito</button>
            <Link to="/"><button>seguir comprando</button></Link>
            </div>)}
  
        </Fragment>
    )
}

export default Cart

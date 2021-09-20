import { Link } from 'react-router-dom';
import React,{ useContext} from 'react'
import { CartContext } from "../context/CartContext";

function Cart() {
    const { cart, clear, removeItem} = useContext(CartContext)
    console.log(cart);
    return (
           <div>
                {cart.map(prod =>  <div> 
                                <h1>{ prod.item.nombre}</h1>
                                <img src={prod.item.pictureUrl} width="400px"></img>
                                <h4>la cantidad es: { prod.quantity}</h4>
                                       
                                <button onClick={removeItem} >X</button>
                                </div>
            )}
<button onClick={clear} >vaciar carrito</button>
<Link to="/"><button>seguir comprando</button></Link>    
        </div>
    )
}

export default Cart

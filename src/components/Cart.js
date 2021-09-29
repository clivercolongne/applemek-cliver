import { Link } from 'react-router-dom';
import React, { Fragment, useContext, useState } from 'react'
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import Form from './Form';
import Modal from './Form'


function Cart() {
    const { cart, clear, removeItem, precioTotal } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            {!cart.length ? (<Link to="/"><button>carrito vacio, compre algo</button></Link>)
                :
                (<div>
                    {cart.map(prod => <div>
                        <h1>{prod.item.nombre}</h1>

                        <img src={prod.item.pictureUrl} width="400px"></img>
                        <h4>la cantidad es: {prod.quantity}</h4>

                        <button onClick={() => removeItem(prod.item.id)} >X</button>
                    </div>)}

                    <h3>${precioTotal()}</h3>

                    <Form />
                    <button onClick={clear} >vaciar carrito</button>
                    <Link to="/"><button>seguir comprando</button></Link>
                    <Button variant="outline-secondary" onClick={() => setShowModal(true)}>Generar orden de compra</Button>
                    <Modal show={showModal} onHide={() => setShowModal(false)} />
                </div>)}

        </Fragment>
    )
}

export default Cart

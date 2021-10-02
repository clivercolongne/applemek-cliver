import { Link } from 'react-router-dom';
import React, { Fragment, useContext, useState } from 'react'
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import Form from './Form';
import Modal from './Form'


function Cart() {
    const { cart, clear, removeItem, precioTotal, itemTotales } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            {!cart.length ? (<Link to="/"><button className="btn btn-success ubicacionBoton">carrito vacio, compre algo</button></Link>)
                :
                (<div>
                    <Table striped bordered hover variant="light" className="text-center" >
            <tbody>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>

              {cart.map((cart) => (
                <tr key={cart.item.id}>
                  <td>
                    <button onClick={() => removeItem(cart.item.id)} />
                    </td>
                  <td>
                    <img
                      className="imagenCarrito"
                      src={cart.item.pictureUrl}
                      alt="imagenCarrito"
                      width="60" height="60"
                    />
                  </td>
                  <td>{cart.item.nombre}</td>
                  <td>{cart.quantity}</td>
                  <td>${cart.item.precio * cart.quantity}</td>
                </tr>
              ))}
              <tr>
                <td>Detalle</td>
                <td>-</td>
                <td>Cantidad Total: { itemTotales}</td>
                <td>Precio Total: ${precioTotal()}</td>
                <td>
                  <Button variant="outline-danger" onClick={() => clear()}>Eliminar Todo</Button>
                </td>
              </tr>
            </tbody>
          </Table>
                    <Form />
                    <button onClick={clear} className="btn btn-danger ubiBoton">vaciar carrito</button>
                    <Link to="/"><button className="btn btn-success ubiBoton">seguir comprando</button></Link>
                    <Button variant="outline-secondary" onClick={() => setShowModal(true)}>Generar orden de compra</Button>
                    <Modal show={showModal} onHide={() => setShowModal(false)} />
                </div>)}

        </Fragment>
    )
}

export default Cart

import React, { useState, useContext } from 'react';
import Modal from "react-bootstrap/Modal";
import { getFirestore } from "../firebase/Firebase";
import { CartContext } from "../context/CartContext";

const Form = (props) => {

    const { cart, clear, precioTotal } = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [idOrden, setIdOrden] = useState(null);

    const generarOrden = (e) => {
        e.preventDefault()
        const comprador = { nombre, telefono, email };
        const db = getFirestore();
        const ordersCollection = db.collection('orders');

        let orden = {};
        orden.buyer = { comprador };
        orden.total = precioTotal;
        orden.items = cart.map((cartItem) => {
            const id = cartItem.prod.id;
            const titulo = cartItem.prod.titulo;
            return { id, titulo }
        })

        ordersCollection.add(orden)
            .then((IdDocument) => {
                setIdOrden(IdDocument.id)
            })
        

    }

    return (

        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese los datos para generar su orden de compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form onSubmit={generarOrden} >
                        <label>Nombre:</label>
                        <input
                            value={nombre}
                            type="text"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <label>Email:</label>
                        <input
                            value={email}
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Telefono:</label>
                        <input
                            value={telefono}
                            type="text"
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                        <button variant="outline-info" type="submit" className="mt-auto" >
                            Comprar
                        </button>
                    </form>
                </fieldset>
            </Modal.Body>
            <Modal.Footer>
                <button variant="outline-info" type="submit" className="mt-auto" onClick={clear}>
                    cerrar
                </button>
            </Modal.Footer>
            <small>{idOrden ? ` Su orden fue generada con el ID: ${idOrden}` : null}</small>
        </Modal>
    );
}

export default Form;
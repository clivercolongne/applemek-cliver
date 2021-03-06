import React, { useState, useContext } from 'react';
import firebase from "firebase";
import Modal from "react-bootstrap/Modal";
import { getFirestore } from "../firebase/Firebase";
import { CartContext } from "../context/CartContext";
const Form = (props) => {
    const { cart, clear, precioTotal } = useContext(CartContext);
    const initialForm = {
        nombre: "",
        email: "",
        tel: "",
    };
    const [formData, setFormData] = useState(initialForm)
    function handleChange(e) {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }
    function handleSubmit(e) {
        e.preventDefault()
        const newOrder = {
            buyer: formData,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioTotal()
        }
        
        const db = getFirestore()
        const orders = db.collection('orders')
        orders.add(newOrder)
            .then(resp => alert(`la orden de compra es: ${resp.id}`))
            .catch(err => console.log(err))
            .finally(() => {
                setFormData(initialForm)
                clear()
            })
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese los datos para generar su orden de compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form onSubmit={handleSubmit} onChange={handleChange} >
                        <div>


                            <label>  Nombre:   </label>
                            <input type="text" placeholder="ingresa nombre" name="nombre" value={formData.nombre} />
                        </div>
                        <div>
                            <label>  Email:   </label>
                            <input type="email" placeholder="ingresa email" name="email" value={formData.email} />
                        </div>
                        <div>
                            <label>  Telefono:   </label>
                            <input type="text" placeholder="ingresa tel" name="tel" value={formData.tel} />
                        </div>
                        <button variant="outline-info" type="submit" className="btn btn-success" >

                            Compra
                        </button>
                    </form>
                </fieldset>
            </Modal.Body>
            <Modal.Footer>
                <button variant="outline-info" type="submit" className="btn btn-danger" onClick={clear}>
                    Cerrar
                </button>
            </Modal.Footer>

        </Modal>
    );
}
export default Form;
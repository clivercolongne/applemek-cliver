import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";




const ItemDetail = ({ item }) => {

    const [changeButton, setChangeButton] = useState(false)

    const { addItem } = useContext(CartContext)



    const onAdd = (quantity) => {

        addItem(item, quantity);
        setChangeButton(true)
        alert(`la cantidad es : ${quantity}`)

    };

    return (
        <div>


            <div>
                <h1>{item.nombre}</h1>
                <div className=' card mb-4 shadow-sm'>
                    <div className="container">
                        <h5>${item.precio}</h5>
                    </div>
                    <div className="container">
                        <img src={item.pictureUrl} alt="soy una imagen" className="w-50" />
                        <br />
                        <p>{item.descripcion}</p>
                    </div>

                </div>
            </div>
            {
                !changeButton &&
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} changeButton={changeButton} />}
            {
                changeButton &&
                <Link to='/cart'>
                    <button>terminar tu compra</button>
                </Link>
            }


            <Link to={`/`}><button>Volver al inicio</button></Link>
        </div>
    )
}

export default ItemDetail;



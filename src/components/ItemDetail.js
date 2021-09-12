import React from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount";

const ItemDetail = ({ item  }) => {
    const onAdd = (count) => {
        console.log(`la cantidad es : ${count}`)
        alert(`la cantidad es : ${count}`)
      };

    return (
        <div>

            <div>
                <h1>{item.nombre}</h1>
                <div className='card w-50'>
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
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            <Link to={`/`}><button>Volver al inicio</button></Link>
        </div>
    )
}

export default ItemDetail;



import React from "react"

import { Link } from "react-router-dom"

const ItemDetail = ({ item }) => {


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
            <Link to={`/`}><button>Volver al inicio</button></Link>
        </div>
    )
}

export default ItemDetail;



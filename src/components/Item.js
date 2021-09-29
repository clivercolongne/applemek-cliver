import React from "react";
import { Link } from "react-router-dom"
import "../App.css";





function Item({ item }) {
  return (

    <div className="card tamanoCard" >
      <img src={item.pictureUrl} className="card-img-top" alt="producto" />
      <div className="card-header">
        {item.nombre}
      </div>
      <div className="card-body">
        <p> {item.descripcion}</p>
      </div>


      <Link to={`/item/${item.id}`}><button>detalle</button></Link>


    </div>
  )
}

export default Item



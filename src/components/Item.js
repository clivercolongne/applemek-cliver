import React from "react";
import { Link } from "react-router-dom"
import "../App.css";






function Item({ item }) {
  return (

    <div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src={item.pictureUrl} className="card-img-top" alt="producto"/>
            <div class="card-body">
              <h5 class="card-title">{item.nombre}</h5>
              <p class="card-text">{item.descripcion}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <Link to={`/item/${item.id}`}><button className="btn btn-sm btn-outline-secondary">detalle</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
  )
}

export default Item



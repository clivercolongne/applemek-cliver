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


            
            <div class="col-md-4 ubicacionDiv">
          <div class="card mb-4 shadow-sm">
            <img src={item.pictureUrl} className="card-img-top" alt="producto"/>
            <div class="card-body">
              <h5 class="card-title">{item.nombre}</h5>
              <h5>${item.precio}</h5>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                </div>
              </div>
            </div>
          
        
            {
                !changeButton &&
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} changeButton={changeButton} />}
            {
                changeButton &&
                <Link to='/cart'>
                    <button className="btn btn-success ubiBoton">Terminar tu compra</button>
                </Link>
            }

            <Link to={`/`}><button className="btn btn-warning ubiBoton">Volver al inicio</button></Link>
           </div>
</div> 
        </div>
    )
}

export default ItemDetail;



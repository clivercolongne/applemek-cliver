import { Button } from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom"
import "../App.css";
import ItemCount from "./ItemCount";




    function Item({ item }) {
    
      const onAdd = (count) => {
        console.log(`la cantidad es : ${count}`)
        alert(`la cantidad es : ${count}`)
      };
      return (
 
       <div className="card tamanoCard" >
          <img src={item.pictureUrl} className="card-img-top" alt="producto"/>
          <div className="card-header">
                       {item.nombre}   
                    </div>
                <div className="card-body">
                  <p> {item.descripcion}</p>
                    </div>
                    
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                   <Link to={`/item/${item.id}`}><button>detalle</button></Link>
                    
                    
                    </div>
     )
    }
    
    export default Item
    
    
  
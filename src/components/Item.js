import React from "react";
import "../App.css";
import ItemCount from "./ItemCount";

    function item() {
    
      const onAdd = (count) => {
        console.log(`la cantidad es : ${count}`)
        alert(`la cantidad es : ${count}`)
      };

      const productos = [
        {id:1,nombre:"iphone 7 plus", descripcion:"el iphone 7 plus esta en exelente estado", stok:3},
        {id:2,nombre:"iphone 8 plus", descripcion:"el iphone 8 plus esta en exelente estado", stok:4},
        {id:3,nombre:"iphone 11 ", descripcion:"el iphone 11 esta en exelente estado", stok:2},
        {id:4,nombre:"iphone 6 ", descripcion:"el iphone 6 esta en exelente estado", stok:6}
      ]
      function getProductos(id) {
        if (id===undefined) {
            return productos
        }else{
            return productos.find( producto=> producto.id === id)
        }
    }
    let tarea = new Promise((resolve) => {
        //console.log("ejecutando promesa") 
        setTimeout(() => {
            resolve(getProductos(6));        
        }, 2000);
        //reject("error 404 ");
    });

      tarea.then((resolver)=>console.log(resolver))
      return (
        <div>
          <ul>
                { productos.map((producto)=>  <div key={producto.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {producto.nombre}
                    </div>
                    <div className="card-body">
                        {producto.descripcion}
                    </div>
                    <ItemCount stock={producto.stok} initial={1} onAdd={onAdd}/>
                </div>  )  }
            </ul>  
        </div>
      )
    }
    
    export default item
    
    
  
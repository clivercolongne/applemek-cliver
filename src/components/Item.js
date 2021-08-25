import React from "react";
import "../App.css";

  function item() {
    const productos = [
  {id:1,nombre:"iphone 7 plus", descripcion:"en exelente estado", stok:3},
  {id:2,nombre:"iphone 8 plus", descripcion:"en exelente estado", stok:4},
  {id:3,nombre:"iphone 11 ", descripcion:"en exelente estado", stok:2},
  {id:4,nombre:"iphone 6 ", descripcion:"en exelente estado", stok:6}
]

  tarea.then((resolver)=>console.log(resolver))

  const tarea = new Promise((resolver ) => {
    setTimeout(() => {
      resolver(productos)
    }, 3000)
  })
      return (
        <div>
        <p>hola</p>
        </div>
      )
    }
    
    export default item
    
  
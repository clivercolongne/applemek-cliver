import React, { useState } from 'react';

const ItemCount =({ stock, initial , onAdd}) => {
    const [count, setCount] = useState(initial);
    const sumItem =()=>{
        count > stock ? alert("superaste el limite de productos") : setCount(count +1) 
  };
  const resItem =()=>{
      if(count > initial) setCount(count - 1)
  };
  const handlerOnAdd=()=>{
      onAdd(count)
      setCount(initial)
  };
   
    return (
      <div>
      <button onClick={sumItem}>+</button>
          <label>{count}</label>
      <button  onClick={resItem}>-</button>
      <button onClick={handlerOnAdd}>Agregar </button>
        </div>
    )
};

export default ItemCount
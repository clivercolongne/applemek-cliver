import React, { useState } from 'react';

function ItemCount({ stock, initial }) {
    const [count, setCount] = useState(initial);
    const onAdd = () => {
      if (count > stock) {
        alert("superaste el limite de stock");
    } else {
      setCount(count + 1);
    }
    };
    console.log("initial" ,initial);
    const resItem = () => {
        setCount(count - 1);  
        }




    return (
        <div>
      <label>{count}</label>

      <button onClick={onAdd}>+</button>
      <button disabled={count < 1} onClick={resItem}>-</button>
        </div>
    )
}

export default ItemCount

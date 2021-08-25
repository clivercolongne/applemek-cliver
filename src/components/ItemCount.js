import React, { useState } from 'react';

function ItemCount({ stock, initial , onAdd}) {
    const [count, setCount] = useState(initial);
    const resItem = () => {
        setCount(count - 1);  
        }
    const sumItem=()=>{
      setCount(count + 1); 
    }
    return (
      <div>
      <button onClick={sumItem}>+</button>
          <label>{count}</label>
      <button disabled={count < 1} onClick={resItem}>-</button>
        </div>
    )
};

export default ItemCount

import React, { useState } from 'react';

function ItemCount() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(Date());
    const handlerClicksuma = () => {
      setCount(count + 1);
      setDate(Date());
    };
    const handlerClickresta = () => {
        setCount(count - 1);
        setDate(Date());
    return (
        <div>
      <label>{count}</label>
      <label>{date}</label>

      <button onClick={handlerClicksuma}>click</button>
      <button onClick={handlerClickresta}>click</button>
        </div>
    )
}}

export default ItemCount

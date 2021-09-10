import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const sumItem = () => {
        count > stock ? alert("superaste el limite de productos") : setCount(count + 1)
    };
    const resItem = () => {
        if (count > initial) setCount(count - 1)
    };
    const handlerOnAdd = () => {
        onAdd(count)
        setCount(initial)
    };

    return (
        <div>
            <button className="btn btn-success" onClick={sumItem}>+</button>
            <label>{count}</label>
            <button className="btn btn-danger" onClick={resItem}>-</button>
            <button className="btn btn-primary" onClick={handlerOnAdd}>Agregar </button>
        </div>
    )
};

export default ItemCount
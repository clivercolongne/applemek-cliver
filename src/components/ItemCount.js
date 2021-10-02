import React, { useState } from 'react';



const ItemCount = ({ stock, initial, onAdd, changeButton }) => {

    const [count, setCount] = useState(initial);

    const sumItem = () => {
        count > stock ? alert("superaste el limite de productos") : setCount(count + 1)
    };
    const resItem = () => {
        if (count > initial) setCount(count - 1)
    };

    const handleOnAdd = () => {
        onAdd(count)
        setCount(initial)
    }

    return (
        <div>
            <div >
                <button className="btn btn-success ubiBoton" onClick={sumItem}>+</button>
                <label>{count}</label>
                <button className="btn btn-danger ubiBoton" onClick={resItem}>-</button>
                {
                    !changeButton && <button className="btn btn-success ubiBoton" onClick={handleOnAdd}>Agregar al carrito</button>
                }
            </div>
        </div>

    )
};

export default ItemCount
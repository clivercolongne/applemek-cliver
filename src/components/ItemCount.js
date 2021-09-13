import React, { useState } from 'react';
import { Link } from "react-router-dom"

const InputCount= ()=> {
    return <Link to={'/cart'}><button >Terminar compra</button></Link>
}

const ButtonCount= ()=> {
    return <button>Agregar Al carrito</button>

}

const ItemCount = ({ stock, initial, onAdd }) => {
    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
        onAdd(count)
        setCount(initial)
    }

    const [count, setCount] = useState(initial);
    
    const sumItem = () => {
        count > stock ? alert("superaste el limite de productos") : setCount(count + 1)
    };
    const resItem = () => {
        if (count > initial) setCount(count - 1)
    };
    
    return (
        <div>
            <div >
            <button className="btn btn-success" onClick={sumItem}>+</button>
            <label>{count}</label>
            <button className="btn btn-danger" onClick={resItem}>-</button>
            <div onClick={handleInter}>
            {
                inputType === 'button' ? 
                    <ButtonCount />
                : 
                    <InputCount />
            }</div></div>
        </div>
        
    )
};

export default ItemCount
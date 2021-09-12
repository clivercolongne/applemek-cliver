import { useState } from "react";



const InputCount= ()=> {
    return <button >Terminar compra</button>
}

const ButtonCount= ()=> {
    return <button>Agregar Al carrito</button>

}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div onClick={handleInter}>
            {
                inputType === 'button' ? 
                    <ButtonCount />
                : 
                    <InputCount />
            }
            {/* <Count onConfirm={addToCart} maxQuantity={itemMax} /> */}
        </div>
    )
}

export default Intercambiabilidad

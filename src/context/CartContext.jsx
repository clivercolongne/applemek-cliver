import React, { createContext, useState}  from 'react'

const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem  = ( prod, quantity ) => {
        
        setCart([...cart, { item:prod , quantity: quantity}])
    }
    const removeItem  = () => {

    }
    const clear  = () => {

    }
    const isInCart  = () => {

    }


    return (
        <CartContext.Provider 
        value={{
            cart,
            addItem,
            removeItem,
            clear,
            isInCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};
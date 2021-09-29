import React, { createContext, useState } from 'react'

const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (prod, quantity) => {

        setCart([...cart, { item: prod, quantity: quantity }])
    }

    const removeItem = (itemId) => {
        const deleteProduct = cart.filter((prod) => prod.item.id !== itemId);

        setCart([...deleteProduct]);

    }

    const clear = () => {
        setCart([])
    }



    function itemTotales() {
        return cart.reduce((acum, valor) => (acum + valor.quantity), 0)
    }

    const precioTotal = () => {
        return cart.reduce((acum, valor) => (acum + (valor.quantity * valor.item.precio)), 0)
    }




    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clear,
                precioTotal,
                itemTotales,

            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };
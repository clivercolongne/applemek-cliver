import React, { createContext, useState}  from 'react'

const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem  = ( prod, quantity ) => {
        
        setCart([...cart, { item:prod , quantity: quantity}])
    }
    const removeItem  = (item) => {
        const deleteProduct = cart.filter((prod) => prod.item.id !== item.item.id);

        setCart([...deleteProduct]);
  
    }
    const clear  = () => {
        setCart([])
    }


    return (
        <CartContext.Provider 
        value={{
            cart,
            addItem,
            removeItem,
            clear,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};
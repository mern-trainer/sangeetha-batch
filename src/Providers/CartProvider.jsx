import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([])
    
    return <CartContext.Provider value={{cartList, setCartList}}>
        {children}
    </CartContext.Provider>
}

// custom hook for context

export const useCart = () => {
    return useContext(CartContext)
}
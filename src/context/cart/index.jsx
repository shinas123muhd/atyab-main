import React, {createContext,useContext, useState} from "react";

const CartContext = createContext()

export const useCart =()=>{
    return useContext(CartContext)
}

export const CartProvider =({children})=>{
    const [cartItems,setCartItems] = useState([])

    const addToCart=(product)=>{
        const  existingProduct = cartItems.find(item=>item.id === product.id);
        if(existingProduct){
            setCartItems(cartItems.map(item => item.id === product.id ? 
                {...item, count : item.count + 1}: item
            )

            )
        
        }else{
            setCartItems([...cartItems,{...product,count:1}])
        }
    }

    const removeCartItem=(productId)=>{
        setCartItems(cartItems.filter(item=>item.id !== productId));

        
    }
    const quantityIncrement=(productId)=>{
        setCartItems(prevItems =>prevItems.map(item=>item.id === productId ? {...item, count:item.count + 1}: item))
    }
    const quantityDecrement=(productId)=>{
        setCartItems((prevItems)=>(prevItems.map((item)=>item.id===productId ? {...item , count:item.count -1 }: item).filter(item=>item.count > 0)))
    }

    const cartItemCount = cartItems.reduce((total,item)=>total + item.count,0)




const values = {
    cartItems,addToCart,removeCartItem,cartItemCount,quantityIncrement,quantityDecrement,setCartItems
}

return (
    <CartContext.Provider value = {values}>
        {children}
    </CartContext.Provider>
)
}
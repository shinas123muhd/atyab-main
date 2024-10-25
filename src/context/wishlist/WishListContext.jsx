import React, { useState, useContext, createContext } from 'react'

const WishListContext = createContext()

export const useWishList = () => {
    return useContext(WishListContext)
}

export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([])

    const addToWishList=(product)=>{
        if(!wishList.some(item=>item.id === product.id)){
            setWishList([...wishList,product])
        }
    }
    const removeWishList =(productId)=>{
        setWishList(wishList.filter(item=>item.id !== productId))

    }
    const isInWishlist = (productId) => {
        return wishList.some(item => item.id === productId);
      };

      const value = {
        wishList,
        addToWishList,
        removeWishList,
        isInWishlist
      };



return (
    <WishListContext.Provider value={value}>
    {children}
  </WishListContext.Provider>
)
}





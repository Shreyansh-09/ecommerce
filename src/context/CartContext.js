import { createContext, useState } from "react";
import { products } from "../backend/db/products";

export const cartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishListItems, setWishListItems] = useState([]);

    const addToCart = (item) => {
        const productIndex = cartItems.findIndex(({ id }) => id === item.id);
        productIndex === -1
          ? setCartItems((cart) => [...cart, { ...item, count: 1 }])
          : setCartItems((cart) =>
              cart.map((product) =>
                product.id === item.id
                  ? { ...product, count: product.count + 1 }
                  : product
              )
            );
      };

    const removeFromCart = (removeCartItem) => {
        setCartItems(item => item.filter(({id}) => id !== removeCartItem.id));
    }

    const addToWishList = (addWishListItem) => {
        setWishListItems(item => [...item, addWishListItem]);
    }

    const removeFromWishList = (removeWishListItem) => {
        setWishListItems(item => item.filter(({id}) => id !== removeWishListItem.id));
    }

    return(
        <div>
            <cartContext.Provider value={{ products, cartItems, setCartItems, addToCart, removeFromCart, addToWishList, wishListItems, removeFromWishList }}>
                {children}
            </cartContext.Provider>
        </div>
    )
}
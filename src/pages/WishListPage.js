import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cartContext } from '../context/CartContext';

export const WishListPage = () => {
  const { wishListItems, removeFromWishList, cartItems, addToCart } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <NavLink style={{margin:"0 5px"}} to="/">Home</NavLink>
        <NavLink style={{margin:"0 5px"}} to="/cart">My Cart</NavLink>
      </nav>
      <h1>This is Wishlist Page</h1>
      <h3>Items: {wishListItems.length}</h3>
      <div>
        {
            wishListItems.map((product) => {
                const {id:itemId, name, description, category, brand, quantity} = product;
                return(
                    <>
                    <li key={itemId} style={{listStyle:"none"}}>
                    <p>Name: {name}</p>
                    <p>Description: {description}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Category: {category}</p>
                    <p>Brand: {brand}</p>
                    <button onClick={() => removeFromWishList(product)}>Remove from Wishlist</button>
                    {
                      cartItems.find(({id}) => id === itemId) ? 
                      <button onClick={() => navigate("/cart")}>Go to Cart</button> : 
                      <button onClick={() => addToCart(product)}>Add to Cart</button>
                    }
                    </li>
                    </>
                )
            })
        }
      </div>
    </div>
  )
}

import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cartContext } from '../context/CartContext';

export const CartPage = () => {
    const navigate = useNavigate();
    const { cartItems, setCartItems, removeFromCart, wishListItems, addToWishList } = useContext(cartContext);
    console.log(cartItems);

    const totalCount = cartItems.reduce((acc, curr) => acc + curr.count ,0);

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price*curr.count ,0);

    const increaseCount = (product) => {
        setCartItems(item => item.map((item) => item.id === product.id ? ({...item, count: item.count + 1}) : item));
    }

    const decreaseCount = (product) => {
        setCartItems(item => item.map((item) => item.id === product.id ? ({...item, count: item.count - 1}) : item));
    }
  return (
    <div>
      <div className='navbar'>
      <nav>
      <NavLink style={{margin:"0 5px"}} to="/">Home</NavLink>
      <NavLink style={{margin:"0 5px"}} to="/wishlist">My Wishlist</NavLink>
      </nav>
      </div>
      <h1>Cart Page</h1>
      <h3>Total Items: {totalCount}</h3>
      <div className='wrapper'>
        {
            cartItems.map((product) => {
                const {id:itemId, name, description, category, brand, quantity, count} = product;
                return(
                    <div className='product-container'>
                    <li key={itemId} style={{listStyle:"none"}}>
                    <p>Name: {name}</p>
                    <p>Description: {description}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Category: {category}</p>
                    <p>Brand: {brand}</p>
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <button onClick={() => increaseCount(product)}>+</button>
                    <span>{count}</span>
                    <button onClick={() => count > 1 ? decreaseCount(product) : removeFromCart(product)}>-</button>
                    </div>
                    <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
                    {
                        wishListItems.find(({id}) => id === itemId) ?
                        <button onClick={() => navigate("/wishlist")}>Go to Wishlist</button> : 
                        <button onClick={() => addToWishList(product)}>Add to Wishlist</button>
                    }
                    </li>
                    </div>
                )
            })
        }
      </div>
      <div className='checkout-details'>
        Cart Total Details:
        <p>Total Cart Items: {totalCount}</p>
        <p>Total Price: {totalPrice} INR</p>
      </div>
    </div>
  )
}
import React, { useContext } from 'react';
import { cartContext } from '../context/CartContext';
import { NavLink, useParams } from 'react-router-dom';

export const AboutPage = () => {
    const { products } = useContext(cartContext);
    const { productId } = useParams();

  return (
    <div>
      <h1>This is my About Page</h1>
      <p>Clicked product has id {productId}</p>
      <NavLink to="/">See all Items</NavLink>
    </div>
  )
}

import React, { useContext, useState } from 'react';
import { products } from "../backend/db/products";
import { NavLink, useNavigate } from "react-router-dom";
import { cartContext } from '../context/CartContext';
import { categories } from '../backend/db/categories';

const HomePage = () => {
  const { addToCart, addToWishList, cartItems, wishListItems } = useContext(cartContext);
  const navigate = useNavigate();
  const initialFilterValue = {search:"", sortType: '', categoryBox: [], range: 600};
  const [filters, setFilters] = useState(initialFilterValue);

  const handleSearch = (searchProduct) => {
    setFilters({...filters, search: searchProduct})
  }

  const handleCategory = (category) => {
    filters.categoryBox.includes(category)
    ? setFilters({...filters, categoryBox: filters.categoryBox.filter(checkBoxFilter => checkBoxFilter !== category)})
    : setFilters({...filters, categoryBox: [...filters.categoryBox, category]});
  }

  const handleSort = (sortValue) => {
    setFilters({...filters, sortType: sortValue})
  }

  const handleRange = (priceValue) => {
    console.log(priceValue)
    setFilters({...filters, range: Number(priceValue)});
  }

  const handleClearFilter = () => {
    setFilters({search:"", sortType: '', categoryBox: [], range: 600});
  }

  const checkBoxFilteredData = filters.categoryBox.length > 0 ? products.filter(({category}) => filters.categoryBox.find(val => val === category)) : products;

  const textFilteredData = filters.search.length > 0 ? checkBoxFilteredData.filter(({name}) => name.toLowerCase().includes(filters.search.toLowerCase())) : checkBoxFilteredData;

  const sortFilteredData = filters.sortType ? [...textFilteredData].sort((item1, item2) => filters.sortType === 'l2h' ? item1.price - item2.price : item2.price - item1.price) : textFilteredData;

  const rangeFilteredData = filters.range ? sortFilteredData.filter(({price}) => price < filters.range) : sortFilteredData;

  return (
    <div>
      <div className='navbar'>
      <nav>
        <NavLink style={{margin:"0 5px"}} to="/cart">My Cart </NavLink> 
        <NavLink style={{margin:"0 5px"}} to="/wishlist"> My Wishlist</NavLink>
      </nav>
      <input className='searchBar' value={filters.search} onChange={(e) => handleSearch(e.target.value)} placeholder="Search Product"></input>
      </div>
      <h1>Product Listing Page</h1>
      <div className='filter-container'>
      <div>
        <button onClick={() => handleClearFilter()}>Clear Filters</button>
        <h4 style={{paddingLeft:"8px", marginBottom:"0px"}}>Category Filter</h4>
        <ul className='category-filter'>
        {
          categories.map(({id, categoryName}) => {
            return(
              <li key={id}>
                <input id={categoryName} type='checkbox' checked={filters.categoryBox.includes(categoryName)} onChange={() => handleCategory(categoryName)}></input>
                <label>{categoryName}</label>
              </li>
            )
          })
        }
        </ul>
        <div className='sort-filter'>
        <h4 style={{paddingLeft:"8px", marginBottom:"5px"}}>Sort Filter</h4>
        <input id="L2H" name='price' type="radio" checked={filters.sortType === "l2h"} onChange={() => handleSort("l2h")}></input>
        <label for="L2H">Sort by price: Low to High</label>
        <div>
        <input id="H2L" name='price' type="radio" checked={filters.sortType === "h2l"} onChange={() => handleSort("h2l")}></input>
        <label for="H2L">Sort by price: High to Low</label>
        </div>
        </div>
          <h4 style={{paddingLeft:"8px", marginBottom:"0px"}}>Price Slider</h4>
        <div className='range-filter'>
          <p>10</p>
          <p>300</p>
          <p>600</p>
        </div>
        <input onChange={(e) => handleRange(e.target.value)} value={filters.range} type='range' id="price-range" min="10" max="600" step="10" defaultValue="600"></input>
      </div>
      </div>
      <ul className='wrapper'>
        {
            rangeFilteredData.map((product) => {
                const {id: itemId, name, img, price, quantity, category} = product;
                return(
                    <div className='product-container'>
                        <li key={itemId}>
                            <p><img src={img}></img></p>
                            <p style={{ fontWeight:"bold" }}>{name}</p>
                            <p>Price: ₹ {price}</p>
                            <p>{quantity}</p>
                            <p>{category}</p>
                            <NavLink to={`/about/${itemId}`}>Visit Item</NavLink>
                            <div>
                              {
                              cartItems.find(({id}) => id === itemId) ? 
                              <button onClick={() => navigate("/cart")}>Go to Cart</button>
                              :
                              <button onClick={() => addToCart(product)}>Add to Cart</button>
                              }
                              {
                              wishListItems.find(({id}) => id === itemId) ?
                              <button onClick={() => navigate("/wishlist")}>Go to Wishlist</button>
                              :
                              <button onClick={() => addToWishList(product)}>Add to Wishlist</button>
                              }
                            </div>
                        </li>
                    </div>
                )
            })
        }
      </ul>
    </div>
  )
}

export default HomePage

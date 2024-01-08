import React from "react";
import "./Product.css";
import { Icon } from '@iconify/react';

const Product = (props) => {
  const { key, name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt={key} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <br />
        <p> <small>By: {seller}</small> </p>
        <p>${price}</p>
        <p> <small>only {stock} left in stock - order soon</small> </p>
        <button
         className="product-btn"
         onClick={()=> props.handleAddToCard(props.product)}
         //Note-1-3(Readme.md)
        >
          <Icon icon="material-symbols:shopping-cart" /> add to card
        </button>
      </div>
    </div>
  );
};

export default Product;

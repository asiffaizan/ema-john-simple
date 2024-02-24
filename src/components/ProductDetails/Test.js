import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const formatNumber = num => Number(num.toFixed(2));

const Cart = ({ cart, btnText }) => {
    const total = cart.reduce((acc, product) => acc + (product.quantity ? product.price * product.quantity : product.price), 0);
    const productTotal = formatNumber(total);
    const tax = formatNumber(productTotal / 10);
    let shipping = 0;
    
    if (total > 100) shipping = 0;
    else if (total > 35) shipping = 4.99;
    else if (total > 15) shipping = 10.99;
    else if (total > 0) shipping = 12.99;

    const grandTotal = formatNumber(total + shipping + tax);

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Items Ordered: {cart.length}</p>
            <h5>Product Price: {productTotal}</h5>
            <h5>Shipping: {shipping}</h5>
            <p><small>Tax + Vat: {tax}</small></p>
            <h5>Grand Price: {grandTotal}</h5>
            <Link to="/review">
                <button className='cart-btn'>{btnText}</button>
            </Link>
        </div>
    );
};

export default Cart;



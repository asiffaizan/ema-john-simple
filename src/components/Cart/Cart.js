import React from 'react';
import './Cart.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Review from '../Review/Review';


const formateNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}

const Cart = (props) => {

    const cart = props.cart;
    const total = cart.reduce((total,product) => total + product.price,0);
    const productTotal = formateNumber(total);
    const tax = formateNumber(productTotal/10);

    // shipping cost
    let shipping = 0;    
    if (total > 100) {
        shipping = 0;
    }
    else if (total > 35){
        shipping = 4.99;
    }
    else if (total > 15) {
        shipping = 10.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const grandTotal = formateNumber(total + shipping + tax);


    return (
        <div className='cart'>
            <h1>Order Summery</h1>
            <p>Item Ordered: {cart.length} </p>
            <h5>Product Price : {productTotal} </h5>
            <h5>Shipping: {shipping} </h5>
            <p><small>Tax + Vat : {tax} </small></p>
            <h5>Grand Price: {grandTotal} </h5>
            {/* <button className='cart-btn'>Review Your Order</button>
            <Review cart={cart}></Review> */}
            <Popup trigger={<button className='cart-btn'>Review Your Order</button>} position="right center">
                <Review cart={cart}></Review>
            </Popup>
        </div>
    );
};

export default Cart;





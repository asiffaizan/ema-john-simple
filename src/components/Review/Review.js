import React from 'react';
import './Review.css';

const Review = (props) => {
    console.log(props.cart);
    let cart = props.cart;
    return (
        <div className='popup-item'>
            <h2>Order Summary</h2>
            <h5>Items Ordered: {cart.length}</h5>
            <div>
                <ol>
                    {
                        cart.map(item => <li>{item.name} = ${item.price}</li>)
                    }
                </ol>
            </div>
        </div>
    );
};

export default Review;
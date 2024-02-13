import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product}) => {
    const {name, quantity} = product
    return (
        <div className='review-item'>
            <h3 className='product-info'>{name}</h3>
            <h5>Quantity: {quantity}</h5>
            <button className='primary-btn'>Remove</button>
        </div>
    );
};

export default ReviewItem;
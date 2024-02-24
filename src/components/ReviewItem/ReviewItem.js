import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product,removeProduct}) => {
    // console.log(product);
    const {name, quantity, img, price, key} = product
    return (
        <div className='review-item'>
            <div className="image">
                <img src={img} alt={key} />
            </div>
            <div className='review-info'>
                <div>
                    <h3>{name}</h3>
                    <h5>
                        <span>Quantity: {quantity} &#160;</span>
                        <span>&nbsp; Price: ${price}</span>
                    </h5>
                </div>
                <div className="review-btn">
                    <button 
                        className='primary-btn'
                        onClick={()=>removeProduct(key)}
                    >Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
import React, { useEffect, useState } from 'react';
import './Review.css';
import { getStoredCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);

    useEffect(()=>{        
        async function fetchData() {
            try {
                const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON');
                const data = await res.json();
                setCart(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setLoading(false);
            }
        }
        fetchData();
    },[]);

    const cartProduct = cart.filter(product => productKeys.includes(product.key));
    cartProduct.forEach(product => {
        product.quantity = savedCart[product.key];
    })

    // console.log("==>productKeys",productKeys," =>product", cartProduct);

    return (
        <div className='popup-item'>
            {cartProduct.length > 0 && <h2>Cart Item: {cartProduct.length}</h2>}
            {loading ? (
                <p>Loading ...</p>
            ) : (
                cartProduct.length > 0 ? (
                    <div>
                        {cartProduct.map(product => (
                            <ReviewItem key={product.key} product={product} />
                        ))}
                    </div>
                ) : (
                    <p>Please Add Product To Card</p>
                )
            )}
        </div>
    );
};

export default Review;

/*
##############################################
Hare count and countdown are different way to get the same output.
    const count = Object.values(savedCart);
    const countdown = productKeys.map(key => savedCart[key]);
*/
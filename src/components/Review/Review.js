import React, { useEffect, useState } from 'react';
import './Review.css';
import { deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    
    // get data from local storage
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);

    // handle removing the product
    const removeProduct = (productKey) => {
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        deleteFromDb(productKey);
    }

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

    return (
        <div className='order-review'>
            <div className="order-item">
                {cartProduct.length > 0 && <h2>Cart Item: {cartProduct.length}</h2>}
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                    cartProduct.length > 0 ? (
                        <div>
                            {cartProduct.map(product => (
                                <ReviewItem 
                                    key={product.key} 
                                    removeProduct = {removeProduct}
                                    product={product} 
                                />
                            ))}
                        </div>
                    ) : (
                        <p>Please Add Product To Card</p>
                    )
                )}
            </div>
            <div className="order-summary">
                <Cart 
                cart={cart}
                btnText="Create Order"
                 />
            </div>
            
        </div>
    );
};

export default Review;

// some notes are written in README.md file. They are not included here. If you want to see them, please go to README.md file. Thank you.

/*
<div className="order-summary">
    <h2>Order Summary</h2>
    <h3>Items Ordered: {cartProduct.length}</h3>
    <h4>Shipping & Handling: $0</h4>
    <h4>Total Before Tax: $0</h4>
    <h4>Estimated Tax: $0</h4>
    <h2>Order Total: $0</h2>
    <button className='primary-btn'>Review Your Order</button>
</div>
*/
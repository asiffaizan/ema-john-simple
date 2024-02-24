import React, { useEffect, useState } from 'react';
import './Review.css';
import { deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

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

    // handle place order

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
            {loading ? (
                <p>Loading ...</p>
            ) : (
                cartProduct.length > 0 ? (
                    <>
                        <div className="order-item">
                            {cartProduct.length > 0 && <h2>Cart Item: {cartProduct.length}</h2>}
                            {cartProduct.map(product => (
                                <ReviewItem 
                                    key={product.key} 
                                    removeProduct = {removeProduct}
                                    product={product} 
                                />
                            ))}
                        </div>
                        <div className="order-summary">
                            <Cart cart={cartProduct}>
                                <button className='cart-btn'>Place Order</button>
                            </Cart>
                        </div>
                    </>
                ) : (
                    <p className='product-request'>Please Add Product to Cart 🛒</p>
                )
            )}
        </div>
    );
};

export default Review;

// some notes are written in README.md file. They are not included here. If you want to see them, please go to README.md file. Thank you.
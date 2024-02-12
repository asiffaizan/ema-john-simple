import React, { useEffect, useState } from 'react';
import './Review.css';
import { getStoredCart } from '../../utilities/fakedb';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);

    useEffect(() => {
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
    }, []);

    // Filter the products that are in the cart
    const cartProducts = cart.filter(product => productKeys.includes(product.key));

    // Assign quantity to each product in the cartProducts array
    cartProducts.forEach(product => {
        product.quantity = savedCart[product.key];
    });

    console.log("cartProducts", cartProducts);

    return (
        <div className='popup-item'>
            <h2>Order Summary</h2>
            {loading ? (
                <p>Loading ...</p>
            ) : (
                cartProducts.length > 0 ? (
                    <ul>
                        {cartProducts.map(product => (
                            <li key={product.key}>{product.name} - Quantity: {product.quantity} - ${product.price}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Please Add Products To Cart</p>
                )
            )}
        </div>
    );
};

export default Review;

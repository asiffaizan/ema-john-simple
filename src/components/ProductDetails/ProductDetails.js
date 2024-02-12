import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { productKey } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON');
                const data = await res.json();
                setItems(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const product = items.find(item => item.key === productKey);

    return (
        <div>
            <h1>Hare's Your Product</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {product ? (
                        <Product showAddToCard={false} product={product} />
                    ) : (
                        <p>Product not found.</p>
                    )}
                </>
            )}
        </div>
    );
};

export default ProductDetails;

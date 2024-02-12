import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.JSON';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function fetchData() {
            try {
                const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON');
                const data = await res.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        fetchData();
    
    },[])
    const items = products.slice(0,10);

    //adding items to cart
    const [cart, setCart] = useState([]);



    

    const handleAddToCard = (element) => {
        const newCart = [...cart, element];
        setCart(newCart);
        addToDb(element.key);
    }
    return (
        <>
            {loading ? (
                <p className='Loading'>Loading.....</p>
            ) : (
                <div className='shop-container'>
                    <div className="product-container">
                        {
                            items.map(item => {
                                return (
                                    <div className="lov"  key={item.key} >
                                        <Product 
                                            showAddToCard = {true}
                                            product = {item}
                                            handleAddToCard = {handleAddToCard}
                                            >
                                        </Product>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="shopping-card">
                        <Cart cart={cart}></Cart>
                    </div>
                    
                </div>
            )}
        </>
    );
};

export default Shop;

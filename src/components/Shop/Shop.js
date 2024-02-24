import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const items = products.slice(0,10);

    //adding items to cart
    const [cart, setCart] = useState([]);


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
  
    //add to cart
    const handleAddToCard = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(p => p.key === toBeAddedKey);
        let count = 1 ;
        let newCart;
        if(sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key, count);
    }

    //set carts data from localhost
    useEffect(()=>{
        const savedCart = getStoredCart();
        const storedCart = [];
        if(products.length){
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[products])




    return (
        <>
            {loading ? (
                <p className='Loading'>Loading.....</p>
            ) : (
                <div className='twin-container'>
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
                        <Cart cart={cart}>
                            <Link to="/review">
                                <button className='cart-btn'>Review Your Order</button>
                            </Link>
                        </Cart>
                    </div>
                    
                </div>
            )}
        </>
    );
};

export default Shop;

/*
useEffect(()=>{
        const savedCart = getStoredCart();
        const storedCart = [];
        if(products.length){
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[products])

*/

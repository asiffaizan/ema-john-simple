import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.JSON';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(fakeData)
        .then(res => res.json())
        .then(data =>setProducts(data))
    
    },[])
    const items = products.slice(0,10);

    const [cart, setCart] = useState([]);



    

    const handleAddToCard = (element) => {
        // console.log('Product Added',element);
        const newCart = [...cart, element];
        setCart(newCart);
        console.log(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    items.map(item => {
                        return (
                            <div className="lov"  key={item.key} >
                                <Product 
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
    );
};

export default Shop;

import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
        let newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className='grid grid-cols-5 jm-container gap-4'>
            <div className='col-span-4 my-24'>
                <div className='grid grid-cols-3 gap-8 '>
                    {
                        products.map((product)=> <Product key={product.id} data = {product} addToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>
            <div className='col-span-1 bg-[rgba(255,153,0,0.30)] h-[100vh] py-6 px-3 sticky top-0 rounded-lg'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
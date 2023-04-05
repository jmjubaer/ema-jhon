import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import { addToCart, getStoredCart } from '../function/fakeDb';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect(()=>{
        let storedCart = getStoredCart();
        let savedCart = [];
        for(const id in storedCart){
            let addedCart = products.find(product => product.id === id); 
            if(addedCart){
                const quantity = storedCart[id];
                addedCart.quantity = quantity;
                savedCart.push(addedCart);
            }
        }
        setCart(savedCart); 
    },[products])
    const handleAddToCart = (product) =>{
        let newCart = []
        const exists = cart.find(pd => pd.id === product.id);
        if(exists){
            let remaining = cart.filter(pd => pd.id !== product.id);
            exists.quantity += 1;
           newCart = [...remaining,exists];
        }else{
            product.quantity = 1;
            newCart=[...cart,product]
        }

        // const exists = cart.find(pd => pd.id === product.id);
        // if(!exists){
        //     product.quantity = 1;
        //     newCart= [...cart, product]
        // }
        // else{
        //     exists.quantity = exists.quantity + 1;
        //     const remaining = cart.filter(pd => pd.id !== product.id);
        //     newCart = [...remaining, exists];
        // }

        setCart(newCart);
        addToCart(product.id)
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
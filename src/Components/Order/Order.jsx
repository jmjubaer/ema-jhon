import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewCart from './reviewCart/ReviewCart';
import { removeFormDb } from '../function/fakeDb';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart)
    const handleRemoveCart = id =>{
        const remainingCart = cart.filter(pd => pd.id !== id)
        setCart(remainingCart)
        removeFormDb(id);
    }
    return (
        <div className='grid grid-cols-5 jm-container gap-4'>
            <div className='col-span-3 my-24'>
                {
                    cart.map(product => <ReviewCart 
                        key={product.id}
                        product={product}
                        handleRemoveCart = {handleRemoveCart}
                        ></ReviewCart>)
                }
            </div>
            <div className='col-span-2 h-screen bg-[#ff99004d] py-6 px-3 sticky top-0 rounded-lg'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
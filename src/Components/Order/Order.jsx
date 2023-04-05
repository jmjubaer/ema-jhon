import React from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewCart from './reviewCart/ReviewCart';

const Order = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='grid grid-cols-5 jm-container gap-4'>
            <div className='col-span-3 my-24'>
                {
                    cart.map(product => <ReviewCart 
                        key={product.id}
                        product={product}
                        ></ReviewCart>)
                }
            </div>
            <div className='col-span-2 h-screen bg-[rgba(255,153,0,0.30)] py-6 px-3 sticky top-0 rounded-lg'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
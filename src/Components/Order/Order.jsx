import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ReviewCart from './reviewCart/ReviewCart';
import { removeFormDb } from '../function/fakeDb';
import { faTrashCan,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart)
    const handleRemoveCart = id =>{
        const remainingCart = cart.filter(pd => pd.id !== id)
        setCart(remainingCart)
        removeFormDb(id);
    }
    const removeCart = () =>{
        setCart([])
        localStorage.setItem('shoppingCart', JSON.stringify({}))
    }
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/checkout')
    }
    return (
        <div className='grid grid-cols-5 jm-container gap-x-4'>
            <div className='col-span-3 my-11'>
                {
                    cart.map(product => <ReviewCart 
                        key={product.id}
                        product={product}
                        handleRemoveCart = {handleRemoveCart}
                        ></ReviewCart>)
                }
            </div>
            <div className='col-span-2 h-fit bg-[#ff99004d] py-6 px-3 sticky top-11 rounded-lg my-11'>
                <Cart removeCart={removeCart} cart={cart}><button onClick={handleNavigate}  className='flex justify-between items-center p-3 w-full text-white bg-[#FF9900] active:bg-[#FF3030] rounded-lg mt-4'><span>Checkout</span> <FontAwesomeIcon icon={faArrowRight} /> </button></Cart>
            </div>
        </div>
    );
};

export default Order;
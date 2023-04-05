import React from 'react';
import { faTrashCan,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeCart } from '../function/fakeDb';

const Cart = ({cart}) => {
    let itemQuantity = 0; 
    let total = 0 ;
    let totalShipping = 0 ;
    // console.log(cart);
    for(const item of cart){
        total += item.price * item.quantity;
        totalShipping += item.shipping;
        itemQuantity =itemQuantity + item.quantity;         
    }
    let tax = total*5/100;
    let grandTotal = total + tax + totalShipping;
    return (
        <div>
                <h2 className='text-2xl text-center '>Order Summary</h2>
                <h3 className='text-lg mt-4'>Selected Items: {itemQuantity}</h3>
                <h3 className='text-lg mt-4'>Total Price: ${total} </h3>
                <h3 className='text-lg mt-4'>Total Shipping Charge: ${totalShipping} </h3>
                <h3 className='text-lg mt-4'>Tax: ${tax.toFixed(2)} </h3>
                <h3 className='text-lg mt-4'>Grand Total: ${grandTotal} </h3>
                <button onClick={removeCart} className='block p-3 w-full text-white bg-[#FF3030] active:bg-[#FF9900] rounded-lg mt-14'>Clear Cart <FontAwesomeIcon icon={faTrashCan}/></button>
                <button className='block p-3 w-full text-white bg-[#FF9900] active:bg-[#FF3030] rounded-lg mt-4'>Review Order <FontAwesomeIcon icon={faArrowRight} /> </button>
        </div>
    );
};

export default Cart;
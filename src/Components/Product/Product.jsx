import React from 'react';
import icon from '../.././images/cart-plus.png'

const Product = (props) => {
    // console.log(props.data);
    const {img:image,name,price,seller,ratings} = props.data;
    const handleAddToCart = props.addToCart;
    return (
        <div>
            <div className="card card-compact w-auto bg-base-100 shadow-xl rounded-md overflow-hidden">
                <div className='p-2'>
                    <figure className='rounded-lg'>
                        <img  src={image} alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}!</h2>
                        <h3 className='text-xl'>Price: ${price}</h3>
                        <p>Manufacturer: {seller}</p>
                        <p>Rating: {ratings} Star</p>
                    </div>
                </div>
                <button onClick={() => handleAddToCart(props.data)} className="border-t-2 text-center p-3 bg-[#FFE0B3] flex justify-center">
                    <p>Add to Cart</p> 
                    <img src={icon} alt="" />
                    
                </button>
            </div>
        </div>
    );
};

export default Product;
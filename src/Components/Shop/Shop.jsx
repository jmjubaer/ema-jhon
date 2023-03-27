import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='grid grid-cols-5 jm-container'>
            <div className='col-span-4 my-24'>
                <div className='grid grid-cols-3 gap-8 '>
                    {
                        products.map((product)=> <Product key={product.id} data = {product}></Product>)
                    }
                </div>
            </div>
            <div className='col-span-1'>
                <h1>jgksjf</h1>
            </div>
        </div>
    );
};

export default Shop;
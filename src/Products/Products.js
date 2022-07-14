import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ product }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2 className='product-title text-5xl text-center mb-5 uppercase font-bold '>Pro<span style={{ color: '#FA5F0B' }}>duct</span></h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)}
            </div>
        </div>
    );
};

export default Products;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './Porduct.css'




const Product = ({ product }) => {
    const { image, productname, minimumOrder, price, quantity, description, } = product;


    return (
        <div>
            <div class="productname  border px-3 card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-64' src={image} alt="Shoes" /></figure>
                <div className="card-body h-80">
                    <h2 class="card-title">{productname}</h2>
                    <div className='prices my-3'>
                        <p><span className='prices-descripe'>MinimumOrder:</span>{minimumOrder}</p>
                        <p><span className='prices-descripe'>Price:</span>${price}</p>
                        <p><span className='prices-descripe'>Quantity:</span>{quantity}</p>
                        <p className=' pb-3 description'>{description?.slice(0, 110)}.....</p>
                    </div>

                    <div className='text-center mb-0'>
                        <button className='btn btn-outline mb-0 btn-warning'>
                            Buy Now  <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
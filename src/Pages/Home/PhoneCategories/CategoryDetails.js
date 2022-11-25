import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const CategoryDetails = () => {
    const products = useLoaderData()
    // console.log(products)

    // console.log(image)
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-semibold mb-10'>{`Some Collection For You`}</h1>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5  '>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;
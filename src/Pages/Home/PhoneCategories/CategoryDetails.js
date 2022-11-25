import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            <div>
                <h1>Resale</h1>
            </div>
        </div>
    );
};

export default CategoryDetails;
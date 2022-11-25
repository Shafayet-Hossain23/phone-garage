import React, { useContext } from 'react';
import { FaBeer, FaCheckCircle } from 'react-icons/fa';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/UserContext';

const Product = ({ product, setSelectedProduct }) => {
    const { user } = useContext(AuthContext)

    const { category, image, time, location, originalPrice, resalePrice, sellersName, verifiedStatus, yearsOfUse, email, ProductName } = product
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="" className='w-full h-96' /></figure>
            <div className="card-body">
                <h2 className="card-title">{ProductName}</h2>
                <div className='lg:flex lg:justify-between my-4'>
                    <div>
                        <h1 className='text-primary font-semibold'>Product Info:</h1>
                        <h1><span className='font-semibold'>Resale Price :</span> ${resalePrice}</h1>
                        <h1><span className='font-semibold'>Original Price :</span> ${originalPrice}</h1>
                        <h1><span className='font-semibold'>Years of use :</span> {yearsOfUse}</h1>
                        <h1 className='text-primary  font-semibold mt-3'>Extra Info:</h1>
                        <h1><span className='font-semibold'>Location  :</span> {location}</h1>
                        <h1><span className='font-semibold'>Post Time :</span> {time}</h1>
                    </div>
                    <div className=' lg:-ml-8'>
                        <h1 className='text-primary font-semibold lg:mt-0 mt-3'>Seller Info:</h1>
                        <h1><span className='font-semibold'>Seller Name  :</span> {sellersName}</h1>
                        {
                            verifiedStatus && <h1><span className='font-semibold'>Verified Status  :</span> <FaCheckCircle className='inline ml-2 text-blue-500' /> (verified) </h1>

                        }
                    </div>
                </div>
                <div className="card-actions justify-end">
                    {
                        user ? <label onClick={() => setSelectedProduct(product)} htmlFor="my-modal-3" className="btn btn-primary">open modal</label> : <Link to="/login"><button className="btn btn-primary">Book Now</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Product;
import React, { useContext } from 'react';
import { FaBeer, FaCheckCircle, FaUserCircle } from 'react-icons/fa';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/UserContext';

const Product = ({ product, setSelectedProduct, reportProductHandler }) => {
    const { user } = useContext(AuthContext)

    const { category, image, time, location, originalPrice, resalePrice, sellersName, verifiedStatus, yearsOfUse, email, ProductName, _id } = product
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="" className='w-full h-72' /></figure>
            <div className="divider my-0"></div>
            <div className='flex justify-between'>
                <div>
                    <FaUserCircle className="w-5 h-6 ml-3 inline" />
                    <h1 className='inline font-semibold ml-2'>{sellersName}</h1>
                    {
                        verifiedStatus ? <><FaCheckCircle className='inline ml-1 text-blue-500' /> (verified) </> : <i className='ml-1'>(unverified)</i>

                    }
                </div>
                <div>
                    <Link onClick={() => reportProductHandler(_id)} className='link link-info mr-5'>Report</Link>
                </div>
            </div>
            <div className="divider my-0"></div>
            <div className="card-body pt-0 pb-4">
                <h2 className="card-title">{ProductName}</h2>
                <div className=''>
                    <div>
                        <h1 className='font-semibold'>Product Info:</h1>
                        <h1><span className='font-semibold'>Resale Price :</span> ${resalePrice}</h1>
                        <h1><span className='font-semibold'>Original Price :</span> ${originalPrice}</h1>
                        <h1><span className='font-semibold'>Years of use :</span> {yearsOfUse}</h1>
                        <h1 className='font-semibold mt-3'>Extra Info:</h1>
                        <h1><span className='font-semibold'>Location  :</span> {location}</h1>
                        <h1><span className='font-semibold'>Post Time :</span> {time}</h1>
                    </div>
                    {/* <div className=' lg:-ml-8'>
                        <h1 className='font-semibold lg:mt-0 mt-3'>Seller Info:</h1>
                        <h1><span className='font-semibold'>Seller Name  :</span> {sellersName}</h1>
                        {
                            verifiedStatus && <h1><span className='font-semibold'>Verified Status  :</span> <FaCheckCircle className='inline ml-2 text-blue-500' /> (verified) </h1>

                        }
                    </div> */}
                </div>
                <div className="card-actions justify-end">
                    {
                        user ? <label onClick={() => setSelectedProduct(product)} htmlFor="my-modal-3" className="btn w-full   btn-ghost">Book Now</label> : <Link to="/login"><button className="btn w-full btn-active btn-ghost">Book Now</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Product;
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Loading from '../../../Components/Loading';
import BookingModal from '../PhoneCategories/BookingModal';
import Product from '../PhoneCategories/Product';

const AdvertiseProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState('')
    const { data: products = [], isLoading } = useQuery({
        queryKey: ["advertiseProducts"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertiseProducts`)
            const data = res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-10'>
            <div className='text-center font-bold text-3xl'>
                <h1>Advertise Products</h1>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-10 '>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                    ></Product>)
                }
            </div>
            <div>
                {selectedProduct && <BookingModal
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                ></BookingModal>
                }
            </div>
            <div>
                <Toaster />
            </div>
        </div>
    );
};

export default AdvertiseProducts;
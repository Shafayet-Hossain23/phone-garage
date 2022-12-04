import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../../Components/Loading';
import BookingModal from '../PhoneCategories/BookingModal';
import Product from '../PhoneCategories/Product';

const AdvertiseProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState('')
    const { data: products = [], isLoading } = useQuery({
        queryKey: ["advertiseProducts"],
        queryFn: async () => {
            const res = await fetch(`https://phone-garage-server.vercel.app/advertiseProducts`)
            const data = res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const reportProductHandler = (id) => {
        const confirm = window.confirm("Are you sure you want to report this item")
        if (confirm) {
            fetch(`https://phone-garage-server.vercel.app/reportProduct?id=${id}`, {
                method: "PUT",
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Report Done")
                    }
                    else {
                        toast.error("Product is already reported")
                    }
                    console.log(data)
                })
        }
    }
    return (
        <div className='my-10'>
            <div className='text-center font-bold text-3xl'>
                <h1>Advertise Products</h1>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-7 my-10 '>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                        reportProductHandler={reportProductHandler}
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
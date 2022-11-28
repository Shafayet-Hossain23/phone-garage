import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Product from './Product';

const CategoryDetails = () => {
    const products = useLoaderData()
    const [selectedProduct, setSelectedProduct] = useState('')
    // const [reportProduct, setReportProduct] = useState('')
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
                    // console.log(data)
                })
        }
    }
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

export default CategoryDetails;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../ContextApi/UserContext';
import { Link } from 'react-router-dom';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: sellerProducts = [], isLoading } = useQuery({
        queryKey: ["sellerProducts", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellerProducts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(sellerProducts)
    return (
        <div>
            <div className='my-4'>
                <h1 className='text-2xl font-medium'>My Products</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            <th>Delete Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellerProducts &&
                            sellerProducts.map((product, i) => <tr className="hover"
                                key={product._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td className='font-semibold'>{product.ProductName}</td>
                                <td className='text-success font-semibold'>{`$ ${product.resalePrice}`}</td>
                                <td>
                                    {
                                        product?.paid === false &&

                                        <Link
                                            to=''
                                            className='btn btn-xs btn-primary'
                                        >Advertise</Link>

                                    }
                                    {
                                        product?.paid === true &&
                                        <p className='text-green-500 font-bold'>
                                            Sold
                                        </p>
                                    }
                                </td>
                                <td><Link
                                    to=''
                                    className='btn btn-xs btn-error'
                                >Delete</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProducts;
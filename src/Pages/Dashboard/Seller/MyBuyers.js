import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../ContextApi/UserContext';

const MyBuyers = () => {
    const { user } = useContext(AuthContext)
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ["showMyBuyers", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/showMyBuyers?email=${user?.email}`, {
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
    console.log(buyers)
    return (
        <div>
            <div className='my-4'>
                <h1 className='text-2xl font-medium'>My Buyers</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers && buyers.map((buyer, i) => <tr
                                key={buyer._id}
                                className="hover">
                                <th>{i + 1}</th>
                                <td className='font-semibold'>{buyer.customerEmail}</td>
                                <td className='font-semibold'>{buyer.ProductName}</td>
                                <td className='text-primary font-semibold'>{`$ ${buyer.resalePrice} `} </td>
                                <td className='font-semibold'>
                                    {
                                        buyer.paid ? <h1 className='text-success'>Paid</h1> : <h1 className='text-error'>Unpaid</h1>
                                    }
                                </td>

                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;
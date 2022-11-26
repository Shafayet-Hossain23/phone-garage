import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../ContextApi/UserContext';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const { data: myBookings = [] } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    // console.log(myBookings)
    return (
        <div>
            <div className='my-4'>
                <h1 className='text-2xl font-medium'>My Orders</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th className=''>Pay Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myBookings &&
                            myBookings.map((book, i) => <tr className="hover"
                                key={book._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={book.image} alt="" />
                                    </div>
                                </div></td>
                                <td className='font-semibold'>{book.ProductName}</td>
                                <td className='text-success font-semibold'>{`$ ${book.resalePrice}`}</td>
                                <td>
                                    {
                                        book?.resalePrice && !book?.paid &&

                                        <Link
                                            to={`dashboard/payment/${book._id}`}
                                            className='btn btn-xs btn-primary'
                                        >Pay Now</Link>

                                    }
                                    {
                                        book?.resalePrice && book?.paid &&
                                        <p className='text-green-500'>
                                            Paid
                                        </p>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default MyOrder;
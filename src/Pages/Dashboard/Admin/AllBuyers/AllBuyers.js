import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../../../Components/Loading';

const AllBuyers = () => {
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ["allBuyers"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBuyers', {
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
    // console.log(buyers)
    const buyerDeleteHandler = (email) => {
        const confirm = window.confirm("Are you sure you want to delete this buyers and his unpaid bookings?")
        if (confirm) {
            fetch(`http://localhost:5000/deleteBuyer?email=${email}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success("Buyer is deleted successfully")
                    console.log(data)

                })
        }

    }
    return (
        <div>
            <div className='my-4'>
                <h1 className='text-2xl font-medium'>All Buyers</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete Buyer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers && buyers.map((buyer, i) => <tr
                                key={buyer._id}
                                className="hover">
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    <button onClick={() => buyerDeleteHandler(buyer.email)} className='btn btn-xs btn-error'
                                    >Delete</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AllBuyers;
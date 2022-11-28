import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Components/Loading';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ReportedItems = () => {
    const { data: reportItems = [], isLoading, refetch } = useQuery({
        queryKey: ["reportedItems"],
        queryFn: async () => {
            const res = await fetch('https://phone-garage-server.vercel.app/reportedItems', {
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
    // console.log(reportItems)
    const productDeleteHandler = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this reported item")
        if (confirm) {
            fetch(`https://phone-garage-server.vercel.app/deleteReportedItem?id=${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Successfully deleted this report items")
                        refetch()
                    }
                    // toast.success("Successfully deleted this report items")
                    // refetch()
                    // console.log(data)
                })
        }
    }
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
                            <th>seller Email</th>
                            <th className=''> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportItems &&
                            reportItems.map((item, i) => <tr className="hover"
                                key={item._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={item.image} alt="" />
                                    </div>
                                </div></td>
                                <td className='font-semibold'>{item.ProductName}</td>
                                <td className='font-medium'> {item.email}</td>
                                <td>
                                    <button onClick={() => productDeleteHandler(item._id)} className='btn btn-xs btn-error'
                                    >Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;
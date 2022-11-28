import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../../Components/Loading';

const MySellers = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ["allSellers"],
        queryFn: async () => {
            const res = await fetch('https://phone-garage-server.vercel.app/allSellers', {
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
    // console.log(sellers)
    const verifyHandler = (email) => {
        fetch(`https://phone-garage-server.vercel.app/verifySeller?email=${email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.updateSeller.acknowledged && data.updateProductsByEmail.acknowledged) {
                    refetch()
                    toast.success("seller is verified now")

                }

                // console.log(data)

            })
    }
    const sellerDeleteHandler = (email) => {
        const confirm = window.confirm("Are you sure you want to delete this seller and his products?")
        if (confirm) {
            fetch(`https://phone-garage-server.vercel.app/deleteSeller?email=${email}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success("Seller is deleted successfully")
                    // console.log(data)

                })
        }

    }
    return (
        <div>
            <div className='my-4'>
                <h1 className='text-2xl font-medium'>All Sellers</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify Seller</th>
                            <th>Delete Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers && sellers.map((seller, i) => <tr
                                key={seller._id}
                                className="hover">
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    {
                                        seller.verifiedStatus === "verified" ? <button className='btn btn-xs btn-info' disabled
                                        >Verify</button> : <button onClick={() => verifyHandler(seller.email)} className='btn btn-xs btn-info'
                                        >Verify</button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => sellerDeleteHandler(seller.email)} className='btn btn-xs btn-error'
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

export default MySellers;
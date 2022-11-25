import { stringify } from '@firebase/util';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../ContextApi/UserContext';

const BookingModal = ({ selectedProduct, setSelectedProduct }) => {
    const { user } = useContext(AuthContext)
    const { category, image, time, location, originalPrice, resalePrice, sellersName, verifiedStatus, yearsOfUse, email, ProductName, phoneNo, _id } = selectedProduct
    // console.log(selectedProduct)

    const modalHandler = (event) => {
        event.preventDefault()
        const CustomerPhone = event.target.customerPhone.value
        // console.log(CustomerPhone)
        const bookingInfo = {
            customerName: user?.displayName,
            customerEmail: user?.email,
            customerPhoneNo: CustomerPhone,
            ProductName,
            resalePrice,
            sellerPhoneNo: phoneNo,
            sellersName,
            sellerEmail: email,
            categoryName: category,
            productId: _id
        }
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setSelectedProduct('')
                    toast.success("Successfuly Booked. Please visit Dashboard for payment")
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Carefully Check Those Info:</h3>
                    <form onSubmit={modalHandler}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Your Name</span>
                            </label>
                            <input name="customerName"
                                defaultValue={user?.displayName}
                                type="text" placeholder="Your Name" className="input input-bordered w-full" disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Your Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Your Email"
                                defaultValue={user?.email}
                                className="input input-bordered w-full" disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Item Name</span>
                            </label>
                            <input name="itemName"
                                defaultValue={ProductName}
                                type="text" placeholder="Item Name"
                                className="input input-bordered w-full" disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <input
                                name="price"
                                defaultValue={resalePrice} type="text" className="input input-bordered w-full" disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Meeting Location</span>
                            </label>
                            <input name="meetingLocation"
                                defaultValue={location} type="text" placeholder="Meeting Location" className="input input-bordered w-full" disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Seller's Phone No.</span>
                            </label>
                            <input name="sellerPhone"
                                defaultValue={phoneNo} type="phone" placeholder="Seller's Phone No." className="input input-bordered w-full" disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Your Phone No.</span>
                            </label>
                            <input name="customerPhone" type="phone"
                                placeholder="Your's Phone No." className="input input-bordered w-full mb-5" required />
                        </div>
                        <button type='submit' className='btn w-full'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
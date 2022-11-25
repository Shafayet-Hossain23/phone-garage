import React, { useContext } from 'react';
import { AuthContext } from '../../../ContextApi/UserContext';

const BookingModal = ({ selectedProduct }) => {
    const { user } = useContext(AuthContext)
    const { category, image, time, location, originalPrice, resalePrice, sellersName, verifiedStatus, yearsOfUse, email, ProductName, phoneNo } = selectedProduct
    const modalHandler = (event) => {
        event.preventDefault()
        const CustomerPhone = event.target.customerPhone.value
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
                                type="text" placeholder="Your Name" className="input input-bordered w-full" requried disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Your Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Your Email"
                                defaultValue={user?.email}
                                className="input input-bordered w-full" requried disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Item Name</span>
                            </label>
                            <input name="itemName"
                                defaultValue={ProductName}
                                type="text" placeholder="Item Name"
                                className="input input-bordered w-full" requried disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <input name="price" type="text" placeholder="Price" defaultValue={`$ ${resalePrice}`} className="input input-bordered w-full" requried disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Meeting Location</span>
                            </label>
                            <input name="meetingLocation"
                                defaultValue={location} type="text" placeholder="Meeting Location" className="input input-bordered w-full" requried disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Seller's Phone No.</span>
                            </label>
                            <input name="sellerPhone"
                                defaultValue={phoneNo} type="phone" placeholder="Seller's Phone No." className="input input-bordered w-full" requried disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Your Phone No.</span>
                            </label>
                            <input name="customerPhone" type="phone"
                                placeholder="Your's Phone No." className="input input-bordered w-full mb-5" requried />
                        </div>
                        <button className='btn w-full'>Submit</button>





                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
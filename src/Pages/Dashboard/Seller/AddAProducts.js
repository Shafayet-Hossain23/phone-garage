import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../ContextApi/UserContext';
import { useNavigate } from 'react-router-dom';

const AddAProducts = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbbHostKey = process.env.REACT_APP_imagebb_key;

    const date = new Date()
    const formatDate = format(date, "PPpp");
    const navigate = useNavigate()

    const addProductHandler = (data) => {
        const { ProductName, resalePrice, originalPrice, phoneNo, conditionType, location, yearsOfUse, category, discription } = data
        // console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData)
                if (imgData.success) {
                    const productInfo = {
                        ProductName,
                        resalePrice,
                        originalPrice,
                        phoneNo,
                        conditionType,
                        location,
                        yearsOfUse,
                        category,
                        image: imgData.data.url,
                        paid: false,
                        time: formatDate,
                        email: user?.email,
                        sellersName: user?.displayName,
                        discription
                    }
                    fetch(`http://localhost:5000/products/add`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("successfully add a product")
                                navigate("/dashboard/myProducts")
                            }
                        })
                }
            })
    }
    return (
        <div>
            <div className='my-4'>
                <h1 className='text-2xl font-medium'>Add A products</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(addProductHandler)}
                    className="lg:w-2/3 w-full  lg:ml-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Product Name?</span>
                        </label>
                        <input
                            {...register("ProductName", {
                                required: "Product Name is required "
                            })}
                            type="text" placeholder="Enter Your Product Name" className="input input-bordered w-full" />
                        {errors.ProductName && <p className='text-error mb-2'>{errors.ProductName?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Resale Price?</span>
                        </label>
                        <input
                            {...register("resalePrice", {
                                required: "Resale Price  is required "
                            })}
                            type="text" placeholder="Just provide amount. we convert it into $." className="input input-bordered w-full" />
                        {errors.resalePrice && <p className='text-error mb-2'>{errors.resalePrice?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Original Price?</span>
                        </label>
                        <input
                            {...register("originalPrice", {
                                required: "Original Price is required "
                            })}
                            type="text" placeholder="Just provide amount. we convert it into $." className="input input-bordered w-full" />
                        {errors.originalPrice && <p className='text-error mb-2'>{errors.originalPrice?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Phone No.?</span>
                        </label>
                        <input
                            {...register("phoneNo", {
                                required: "Original Price Name is required "
                            })}
                            type="text" placeholder="Enter  phone No." className="input input-bordered w-full" />
                        {errors.phoneNo && <p className='text-error mb-2'>{errors.phoneNo?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Product Condition Type?</span>
                        </label>
                        <select
                            {...register("conditionType", {
                                required: "Condition Type is required"
                            })}
                            className="select select-bordered w-full ">
                            <option defaultValue={`Excellent`}>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                        {errors.conditionType && <p className='text-error mb-2'>{errors.conditionType?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Location?</span>
                        </label>
                        <input
                            {...register("location", {
                                required: "Location is required "
                            })}
                            type="text" placeholder="Enter your Location?" className="input input-bordered w-full" />
                        {errors.location && <p className='text-error mb-2'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Years of purchase?</span>
                        </label>
                        <input
                            {...register("yearsOfUse", {
                                required: "Years of purchase is required "
                            })}
                            type="text" placeholder="Exp: 1 years 3 months" className="input input-bordered w-full" />
                        {errors.yearsOfUse && <p className='text-error mb-2'>{errors.yearsOfUse?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Category Type?</span>
                        </label>
                        <select
                            {...register("category", {
                                required: "Category is required"
                            })}
                            className="select select-bordered w-full ">
                            <option>xiaomi</option>
                            <option>onePlus</option>
                            <option>iphone</option>
                        </select>
                        {errors.category && <p className='text-error mb-2'>{errors.category?.message}</p>}
                    </div>
                    <div className=''>
                        <label className="label">
                            <span className="label-text font-semibold">Upload Product Photo?</span>
                        </label>
                        <input
                            {...register("image", {
                                required: "Image is required "
                            })}
                            type="file" className="file-input file-input-bordered  w-full" />
                        {errors.image && <p className='text-error mb-2'>{errors.image?.message}</p>}
                    </div>
                    <div className=''>
                        <label className="label">
                            <span className="label-text font-semibold">Discription?</span>
                        </label>
                        <textarea
                            {...register("discription")} className="textarea textarea-bordered w-full" placeholder="Write something about your products"></textarea>
                        {errors.discription && <p className='text-error mb-2'>{errors.discription?.message}</p>}
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary w-full mt-6'>Add</button>
                    </div>
                </form>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AddAProducts;
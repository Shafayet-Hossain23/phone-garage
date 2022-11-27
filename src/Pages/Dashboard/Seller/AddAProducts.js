import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const addProductHandler = (data) => {

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
                                required: "Resale Price Name is required "
                            })}
                            type="text" placeholder="Enter  Resale Price" className="input input-bordered w-full" />
                        {errors.resalePrice && <p className='text-error mb-2'>{errors.resalePrice?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Original Price?</span>
                        </label>
                        <input
                            {...register("originalPrice", {
                                required: "Original Price Name is required "
                            })}
                            type="text" placeholder="Enter  Original Price" className="input input-bordered w-full" />
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
                            type="text" placeholder="EnterYears of purchase?" className="input input-bordered w-full" />
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
                    <div>
                        <button type='submit' className='btn btn-primary w-full mt-6'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAProducts;
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import useToken from '../Components/useToken';
import { AuthContext } from '../ContextApi/UserContext';
import Loading from '../Components/Loading';


const Register = () => {
    const { registerEmailPassword, profileUpdate, setLoading } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [userCreatedEmail, setUserCreatedEmail] = useState('')
    const [loader, setLoader] = useState('')
    const [processing, setProcessing] = useState(false)
    const token = useToken(userCreatedEmail)
    useEffect(() => {
        if (token) {
            setLoader(false)
            setProcessing(false)
            navigate('/')
        }
    }, [token])

    const registerHandler = (data, e) => {
        // console.log(data)
        const { userName, email, password, accountStatus } = data
        setError('')
        setProcessing(true)
        registerEmailPassword(email, password)
            .then(result => {
                const user = result.user
                // console.log(user)
                profileUpdate(userName)
                    .then(result => {
                        setLoader(true)
                        saveUserData(userName, email, accountStatus)
                    })

            })
            .catch(error => {
                const message = error.message
                setProcessing(false)
                setError(message)
            })
        // e.target.reset()
    }
    const saveUserData = (name, email, accountStatus) => {
        const userInfo = { name, email, accountStatus }
        fetch('https://phone-garage-server.vercel.app/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                setUserCreatedEmail(email)
                // toast.success("Successfully Register")
                setLoading(false)
            })
    }
    // console.log(sellerAccount)
    // const sellerAccountHandler = (event) => {

    //     console.log(event)
    // }
    if (loader) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:w-2/5 w-full mx-auto mb-20 mt-14 card shadow-xl px-14 pt-8 pb-20'>
            <p className='text-center text-3xl'>Register</p>
            <form onSubmit={handleSubmit(registerHandler)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        {...register("userName",
                            {
                                required: "Name is required"
                            }
                        )}
                        type="text" className="input input-bordered w-full"
                    />
                    {errors.userName && <p className='text-error' type="alert">{errors.userName?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email", {
                            required: "Email is required"
                        })}
                        type="email" className="input input-bordered w-full"
                    />
                    {errors.email && <p className='text-error mb-2'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        {...register("password", {
                            minLength: { value: 6, message: "Password should be atleast 6 characters" },
                            // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*?/])(?=.*[0-9])(?=.*[a-z])/, message: "Password must be strong" }

                        })}
                        type="password" className="input input-bordered w-full"
                    />
                    {errors.password && <p className='text-error '>{errors.password?.message}</p>}
                </div>
                <div>
                    {error && <p className='text-error mt-2'>{error}</p>}
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Select Account</span>
                    </label>
                    <select
                        {...register("accountStatus", {
                            required: "Select Account is required"
                        })}
                        className="select select-bordered w-full ">
                        <option defaultValue={`Buyer Account`}>Buyer Account</option>
                        <option>Seller Account</option>
                    </select>
                    {errors.accountStatus && <p className='text-error mb-2'>{errors.accountStatus?.message}</p>}

                </div>
                <button type="submit" disabled={processing} className='btn w-full mt-6'>Register</button>
            </form>
            <div className="divider">OR</div>
            <div className='text-center'>
                <p>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
            </div>




        </div>
    );
};

export default Register;
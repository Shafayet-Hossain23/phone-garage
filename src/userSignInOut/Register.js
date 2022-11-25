import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import useToken from '../Components/useToken';
import { AuthContext } from '../ContextApi/UserContext';


const Register = () => {
    const { registerEmailPassword, profileUpdate, setLoading } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const [sellerAccount, setSellerAccount] = useState(false)
    const [error, setError] = useState('')
    const [userCreatedEmail, setUserCreatedEmail] = useState('')
    const token = useToken(userCreatedEmail)
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

    const registerHandler = (data, e) => {
        // console.log(data)
        const { userName, email, password } = data
        setError('')
        registerEmailPassword(email, password)
            .then(result => {
                const user = result.user
                // console.log(user)
                profileUpdate(userName)
                    .then(result => {
                        saveUserData(userName, email)
                    })

            })
            .catch(error => {
                const message = error.message
                setError(message)
            })
        // e.target.reset()
    }
    const saveUserData = (name, email) => {
        const userInfo = { name, email }
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // getAccessToken(email)
                setUserCreatedEmail(email)
                toast.success("Successfully Register")
                setLoading(false)
            })
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
                <div>
                    <label className="label">
                        <span className="label-text">Select Account</span>
                    </label>
                    <select
                        className="select select-bordered w-full ">
                        <option selected>Buyer Account</option>
                        <option onClick={() => setSellerAccount(true)}>Seller Account</option>
                    </select>
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
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*?/])(?=.*[0-9])(?=.*[a-z])/, message: "Password must be strong" }

                        })}
                        type="password" className="input input-bordered w-full"
                    />
                    {errors.password && <p className='text-error '>{errors.password?.message}</p>}
                </div>
                <div>
                    {error && <p className='text-error mt-2'>{error}</p>}
                </div>
                <button className='btn w-full mt-6'>Register</button>
            </form>
            <div className="divider">OR</div>
            <div className='text-center'>
                <p>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
            </div>

            <Toaster />


        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { AuthContext } from '../ContextApi/UserContext';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const logoutHandler = () => {
        logOut()
            .then(result => {
                navigate('/login')
            })
            .catch(error => {

            })
    }
    return (
        <div className='w-1/3 mx-auto mt-10 text-center'>
            <h1 className=''>Oops!</h1>
            <div className='flex justify-center'>
                <img className='w-32' src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132__340.png" alt="" />
            </div>
            <p className=''>An unexpected error has occurred</p>
            {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
            <h1 className='text-2xl font-semibold'>Please logout and log in the website again</h1>
            <button className='btn btn-outline btn-error mt-5' onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default ErrorPage;
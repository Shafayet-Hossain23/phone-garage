import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';
import { AuthContext } from '../ContextApi/UserContext';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user, loading)
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children
};

export default PrivateRoutes;
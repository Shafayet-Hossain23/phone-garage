import React, { useContext } from 'react';
import Loading from '../Components/Loading';
import useSeller from '../Components/useSeller';
import { AuthContext } from '../ContextApi/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateSeller = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSeller, sellerLoading] = useSeller(user?.email)
    const location = useLocation()
    if (loading || sellerLoading) {
        return <Loading></Loading>
    }
    if (user && isSeller) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateSeller;
import React, { useContext } from 'react';
import useAdmin from '../Components/useAdmin';
import { AuthContext } from '../ContextApi/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateAdmin = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    const location = useLocation()
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateAdmin;
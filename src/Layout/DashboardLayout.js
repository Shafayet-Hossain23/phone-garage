import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../sharedPages/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Components/useAdmin';
import { AuthContext } from '../ContextApi/UserContext';
import useSeller from '../Components/useSeller';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div className='lg:mx-14 mx-5'>
            <Header></Header>
            <div className='lg:hidden'>
                <label htmlFor="dashboard-drawer" className="btn btn-active btn-ghost btn-sm drawer-button">Dashboard Menu</label>
            </div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                        <li className='text-xl font-medium	'><Link to='/dashboard'>My Orders</Link></li>
                        {
                            isSeller && <>
                                <li className='text-xl font-medium'><Link to='/dashboard/addAProducts'>Add A Products</Link></li>
                                <li className='text-xl font-medium'><Link to='/dashboard/myProducts'>My Products</Link></li>
                                <li className='text-xl font-medium'><Link to='/dashboard/myBuyers'>My Buyers</Link></li>
                            </>

                        }
                        {
                            isAdmin && <>
                                <li className='text-xl font-semibold'><Link to='/dashboard'>All Sellers</Link></li>
                                <li className='text-xl font-semibold'><Link to='/dashboard'>All Buyers</Link></li>
                                <li className='text-xl font-medium'><Link to='/dashboard'>Reported Items</Link></li>
                            </>

                        }

                    </ul>

                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default DashboardLayout;
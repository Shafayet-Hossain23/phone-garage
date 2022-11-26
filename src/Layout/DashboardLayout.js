import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../sharedPages/Header/Header';
import { Link, Outlet } from 'react-router-dom';


const DashboardLayout = () => {
    return (
        <div className='lg:mx-14 mx-5'>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                        <li className='text-xl font-semibold'><Link to='/dashboard'>My Orders</Link></li>

                    </ul>

                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default DashboardLayout;
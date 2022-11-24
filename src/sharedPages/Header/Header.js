import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/website-logo/logo-bg-remove.png'

const Header = () => {
    const listItems =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItems}
                        </ul>
                    </div>
                    <img src={logo} alt="" className='w-14 mt-3' />
                    <Link className="btn btn-ghost -ml-4 normal-case text-xl">PHONE GARAGE</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {listItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
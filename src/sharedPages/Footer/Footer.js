import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/website-logo/logo-bg-remove.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white mt-10">
            <div>
                <img src={logo} alt="" className='w-20' />
                <p>PHONE GARAGE Industries Ltd.<br />Providing reliable services since 2001</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
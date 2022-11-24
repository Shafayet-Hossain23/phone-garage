import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedPages/Footer/Footer';
import Header from '../sharedPages/Header/Header';

const Main = () => {
    return (
        <div className='lg:mx-14 mx-5'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
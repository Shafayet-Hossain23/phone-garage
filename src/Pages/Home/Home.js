import React from 'react';
import AdvertiseProducts from './AdvertiseProducts/AdvertiseProducts';

import Banner from './Banner/Banner';
import PhoneCategories from './PhoneCategories/PhoneCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhoneCategories></PhoneCategories>
            <AdvertiseProducts></AdvertiseProducts>


        </div>
    );
};

export default Home;
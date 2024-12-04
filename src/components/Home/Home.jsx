import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import MoreQuestion from '../MoreQuestion/MoreQuestion';
import MoreFeatures from '../MoreFeature/MoreFeatures';
const Home = () => {
    return (
        <div  className='bg-[#080325] z-1  max-w-md lg:max-w-6xl mx-auto'>
             <div className="absolute top-[70px] lg:top-[70px] left-0 w-full h-full bg-[#080325] bg-opacity-50"></div>
            <Banner></Banner>
            <MoreFeatures></MoreFeatures>
            <Cards></Cards>
            <MoreQuestion></MoreQuestion>
        </div>
    );
};

export default Home;
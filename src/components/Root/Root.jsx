import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/header';
import Foooter from '../Footer/Footer';

const Root = () => {
    return (
        <div className='relative font-lato'>
            <Header/>
            <Outlet />
            <Foooter/>
        </div>
    );
};

export default Root;
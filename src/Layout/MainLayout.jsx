import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTopButton from '../components/ScrollTopButton';


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <ScrollTopButton/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;
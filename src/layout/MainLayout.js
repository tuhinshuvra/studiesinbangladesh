import React from 'react';
import Navbar from '../views/components/Shared/Navbar/Navbar';
import Footer from '../views/components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='container'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout; 
import React from 'react';
import Footer from '../views/components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../views/components/Shared/Navbar/Navbar';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className='container'>
            <Navbar></Navbar>
            <div className='commonMarginTop'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout; 
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageApplyNowSection.css';

const HomePageApplyNowSection = () => {
    return (
        <div className=' applyNowArea'>
            <div className=' d-lg-flex justify-content-center align-items-center '>
                <h3 className='testiCardTitle text-center'>Are you ready to realize your dream? </h3>
                <div className='d-flex justify-content-center'>
                    <Link to="/apply">
                        <button className='applyBtn ms-lg-2'>Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePageApplyNowSection;
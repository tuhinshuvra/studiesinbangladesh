import React from 'react';
import './HomePageApplyNowSection.css';
import { Link } from 'react-router-dom';

const HomePageApplyNowSection = () => {
    return (
        <div className=' applyNowArea'>
            <div className=' d-md-flex justify-content-center align-items-center '>
                <h3 className='testiCardTitle text-center'>Are you ready to realize your dream? </h3>
                <Link to="/apply">
                    <button className='applyBtn ms-5'>Apply</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePageApplyNowSection;
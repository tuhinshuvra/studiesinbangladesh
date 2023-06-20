import React from 'react';
import HeroImg from '../../../../assets/supportImages/hero_right_image.png'
import './HomePageHeroSection.css'
import { Link } from 'react-router-dom';

const HomePageHeroSection = () => {
    return (
        <div>
            {/* <h2>HomePageHeroSection</h2> */}
            <div className=' d-md-flex justify-content-between'>
                <div className='heroLeft col-md-6 text'>
                    <h2 className='hero_h2'>We Help to Build Your Dream</h2>
                    <p className='hero_p my-md-4  col-md-10'>We are available to consult for taking your higher education to the next level so that you can stay competitive.</p>
                    <Link to="/apply">
                        <button className='applyBtn'>Apply</button>
                    </Link>
                </div>
                <div className='heroRight col-md-6 d-flex justify-content-center my-5'>
                    <img src={HeroImg} className='heroImg' alt="" />
                </div>

            </div>
        </div>
    );
};

export default HomePageHeroSection;
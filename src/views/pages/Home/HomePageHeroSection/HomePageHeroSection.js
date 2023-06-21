import React from 'react';
import HeroImg from '../../../../assets/supportImages/hero_right_image.png'
import { Link } from 'react-router-dom';
import './HomePageHeroSection.css'

const HomePageHeroSection = () => {
    return (
        <div className=' d-md-flex justify-content-between heroArea bg1 bg2'>
            <div className='heroLeft col-md-9 text'>
                <div className=' col-lg-8 mx-auto'>

                    <h2 className='heroTitle fw-bold text-primary text-md-start  text-center'>We Help to Build Your Dream</h2>
                    <p className='hero_p my-md-4  col-md-10 text-md-start  text-center'>We are available to consult for taking your higher education to the next level so that you can stay competitive.</p>
                    <Link to="/apply" className=' d-flex justify-content-md-start justify-content-center'>
                        <button className='applyBtn'>Apply</button>
                    </Link>
                </div>
            </div>
            <div className=' col-md-3 d-flex justify-content-end my-5'>
                <img src={HeroImg} className='heroImg d-none d-md-block' alt="" />
            </div>

        </div>
    );
};

export default HomePageHeroSection;
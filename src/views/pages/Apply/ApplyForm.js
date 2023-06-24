import React from 'react';
import { Link } from 'react-router-dom';
import { FaWpforms } from 'react-icons/fa';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { TbChartTreemap } from 'react-icons/tb';
import './ApplyForm.css';

const applyFormLogo = () => {
    return (
        <div className='applyFromArea col-lg-9    mx-auto my-5'>
            <h2 className=' text-primary text-center mb-5 mt-4'>Complete three simple steps to enroll in any Bangladeshi institute</h2>
            <div class="row">

                <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <div className='text-center'>
                                <BsFillPersonVcardFill className='applyFormLogo   text-primary my-3'></BsFillPersonVcardFill>
                            </div>
                            <h5 class="card-title text-primary fw-bold">Basic Information</h5>
                            <p class="card-text">Basic information includes your personal information and address. As you already filled in your personal information during registration. You only have to fill in the address now.</p>
                            <div className=' text-center'>
                                <Link to="/basicInfo" class="btn btn-primary">Basic Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card">

                        <div class="card-body">
                            <div className='text-center'>
                                <TbChartTreemap className='applyFormLogo   text-primary my-3'></TbChartTreemap>
                            </div>
                            <h5 class="card-title text-primary fw-bold">Background information</h5>
                            <p class="card-text">Background information includes your passport information and references. In this form, you have to fill up your passport information. This is needed for the next process.</p>
                            <div className=' text-center'>
                                <Link to="/backgroundInfo" class="btn btn-primary">Background Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <div className='text-center'>
                                <FaWpforms className='applyFormLogo   text-primary my-3'></FaWpforms>
                            </div>
                            <h5 class="card-title text-primary fw-bold">Special title treatment</h5>
                            <p class="card-text">Fill in the basic and background info to enable this form. Have to make ready your academic certificates and exam documents. Your signature and pictures are also required.</p>
                            <div className=' text-center'>
                                <Link to="/applyNow" class="btn btn-primary">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default applyFormLogo;
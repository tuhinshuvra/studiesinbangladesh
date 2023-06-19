import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageServicesSection.css';
import { FaArrowCircleRight } from 'react-icons/fa';

const HomePageServicesSection = () => {
    return (
        <div className='servicesSection'>
            <h2 className=' text-center featured_Head  '>Our services</h2>
            <div className='col-md-9 mx-auto my-4'>
                <p className='servicesSub'>
                    We have expert consultants on board to guide your foreign aspirations.
                    We cover the following services, and your other requirements as well.
                </p>
            </div>

            <div className=' d-flex col-md-10 mx-auto'>
                <div className="card cardOne border-0" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-4">
                            <h3 className="   text-center cardHead">Career Counseling</h3>
                            <p className="card-text cardSub">We identify your strengths and suggest you appropriate courses for your growth </p>

                            <div className=' text-center mt-5 d-flex justify-content-center align-items-center'>
                                <Link href="#" className=" text-decoration-none fw-bold learnMore ">Learn More </Link>
                                <FaArrowCircleRight className='serviceArrow ms-2' />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="card cardTwo border-0" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-4">
                            <h3 className="   text-center cardHead">University Admissions</h3>
                            <p className="card-text cardSub">We do the end to end processing of your application, including SOP and thesis. </p>

                            <div className=' text-center mt-5 d-flex justify-content-center align-items-center'>
                                <Link href="#" className=" text-decoration-none fw-bold learnMore ">Learn More </Link>
                                <FaArrowCircleRight className='serviceArrow ms-2' />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="card cardThree border-0" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-4">
                            <h3 className="   text-center cardHead">Pre-Departure Briefing</h3>
                            <p className="card-text cardSub">We activity prepare you for your departure in all aspects so that you can fulfill your dream </p>

                            <div className=' text-center mt-5 d-flex justify-content-center align-items-center'>
                                <Link href="#" className=" text-decoration-none fw-bold learnMore ">Learn More </Link>
                                <FaArrowCircleRight className='serviceArrow ms-2' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' col-7 mx-auto d-flex my-5 gap-5'>
                <div className="card cardThree border-0" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-4">
                            <h3 className="   text-center cardHead">Accommodation</h3>
                            <p className="card-text cardSub">We plan for your temporary accommodation when you land for your convenience</p>

                            <div className=' text-center mt-5 d-flex justify-content-center align-items-center'>
                                <Link href="#" className=" text-decoration-none fw-bold learnMore ">Learn More </Link>
                                <FaArrowCircleRight className='serviceArrow ms-2' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card cardThree border-0" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-4">
                            <h3 className="   text-center cardHead">Visa Consultancy</h3>
                            <p className="card-text cardSub">We provide you visa consultancy service to make your visa process hassle free </p>

                            <div className=' text-center mt-5 d-flex justify-content-center align-items-center'>
                                <Link href="#" className=" text-decoration-none fw-bold learnMore ">Learn More </Link>
                                <FaArrowCircleRight className='serviceArrow ms-2' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageServicesSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import './HomePageServicesSection.css';

const HomePageServicesSection = () => {
    return (
        <div className='servicesSection'>
            <h2 className='common_Heading text-center  text-primary mb-md-5'>Our services</h2>
            <div className='col-md-9 mx-auto my-4'>
                <p className='servicesSub text-center'>
                    We have expert consultants on board to guide your foreign aspirations.
                    We cover the following services, and your other requirements as well.
                </p>
            </div>

            <div className=' d-md-flex col-xl-10 col-lg-10  mx-auto '>
                <div className="card cardOne border-0 mb-md-0 mb-3  mx-auto" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="text-center commonSubHead text-primary">Career Counseling</h3>
                            <p className="card-text cardSub">We identify your strengths and suggest you appropriate courses for your growth </p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore ">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card cardTwo border-0 mb-md-0 mb-3  mx-auto" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="   text-center commonSubHead text-primary">University Admissions</h3>
                            <p className="card-text cardSub">We do the end to end processing of your application, including SOP and thesis. </p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore ">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card cardThree border-0   mx-auto" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="   text-center commonSubHead text-primary">Pre-Departure Briefing</h3>
                            <p className="card-text cardSub">We activity prepare you for your departure in all aspects so that you can fulfill your dream </p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore ">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' col-lg-7 col-md-8 mx-auto d-md-flex my-5 gap-5'>
                <div className="card cardThree border-0 mb-md-0 mb-3  mx-auto" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="   text-center commonSubHead text-primary">Accommodation</h3>
                            <p className="card-text cardSub">We plan for your temporary accommodation when you land for your convenience</p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore ">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card cardThree border-0 mb-md-0 mb-3  mx-auto" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="   text-center commonSubHead text-primary">Visa Consultancy</h3>
                            <p className="card-text cardSub">We provide you visa consultancy service to make your visa process hassle free </p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore ">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageServicesSection;
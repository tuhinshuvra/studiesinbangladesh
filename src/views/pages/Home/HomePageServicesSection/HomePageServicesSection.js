import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import HomePageServiceSectionModalsData from './HomePageServiceSectionModalsData';
import './HomePageServicesSection.css';

const HomePageServicesSection = () => {
    return (
        <div className='servicesSection'>
            <h2 className='common_Heading text-center  text-primary mb-md-5' data-aos="fade-up">Our services</h2>
            <div className='col-md-9 mx-auto my-4' data-aos="fade-up-left">
                <p className='servicesSub text-center'>
                    We have expert consultants on board to guide your foreign aspirations.
                    We cover the following services, and your other requirements as well.
                </p>
            </div>

            <div className=' d-md-flex col-xl-10 col-lg-10  mx-auto '>
                <div className="card cardOne border-0 mb-md-0 mb-3  mx-auto cardBg" data-aos="zoom-in" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="text-center commonSubHead text-primary">Career Counseling</h3>
                            <p className="card-text cardSub">Career counseling is a process that involves assisting individuals in making informed decisions about their career paths. </p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore" data-bs-toggle="modal" data-bs-target="#careerCouncilingModal">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card cardTwo border-0 mb-md-0 mb-3  mx-auto cardBg" data-aos="zoom-in">
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="   text-center commonSubHead text-primary">University Admissions</h3>
                            <p className="card-text cardSub">University admissions refer to the process by which students apply for admission to colleges and universities. </p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore " data-bs-toggle="modal" data-bs-target="#uniAdmissionModal">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card cardThree border-0 mx-auto cardBg" data-aos="zoom-in" >
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="text-center commonSubHead text-primary">Pre-Departure Briefing</h3>
                            <p className="card-text cardSub">A pre-departure briefing is a session or program conducted for individuals who are preparing to go for the next level </p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore" data-bs-toggle="modal" data-bs-target="#preDepartureModal">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' col-lg-7 col-md-8 mx-auto d-md-flex my-5 gap-5' >
                <div className="card cardThree border-0 mb-md-0 mb-3  mx-auto cardBg" data-aos="zoom-in">
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="   text-center commonSubHead text-primary">Accommodation</h3>
                            <p className="card-text cardSub">When it comes to finding accommodation, there are several options to consider depending on your needs and preferences.</p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore" data-bs-toggle="modal" data-bs-target="#accommodationModal">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card cardThree border-0 mb-md-0 mb-3  mx-auto cardBg" data-aos="zoom-in">
                    <div className="serviceCard" >
                        <div className="card-body my-5 p-xl-4 p-lg-2">
                            <h3 className="   text-center commonSubHead text-primary">Visa Consultancy</h3>
                            <p className="card-text cardSub">Visa consultancy refers to the services provided by professionals or agencies to assist individuals</p>

                            <div className=' text-center mt-lg-5  '>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore" data-bs-toggle="modal" data-bs-target="#visaConsultancyModal">
                                    Learn More
                                    <FaArrowCircleRight className='serviceArrow ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <HomePageServiceSectionModalsData></HomePageServiceSectionModalsData>
        </div>
    );
};

export default HomePageServicesSection;
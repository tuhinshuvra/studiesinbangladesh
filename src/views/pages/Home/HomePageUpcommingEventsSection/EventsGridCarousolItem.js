import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import './EventsGridCarousol.css';
import HomePageUpcomingEventsModalData from './HomePageUpcomingEventsModalData';

const EventsGridCarousolItem = ({ dateMonth, dateMonth2, subTitleOne, subTitleTwo, imageOne, imageTwo }) => {
    return (
        <div className=" d-flex gap-3 mb-md-5 mb-3">

            <div className=" col-6 " data-aos="flip-left">
                <div className="card  border-0 cardBg" >
                    <div className="eventsCarousol shadow-sm" >
                        <div className="card-body mt-3 p-xl-5 p-lg-3 p-2">
                            <div className=' d-flex'>
                                <div className='dateMonth text-center p-1'>
                                    <h3 className=' fw-bold my-0'>23</h3>
                                    <p className=' fw-bold my-0'>October</p>
                                </div>
                                <img src={imageOne} className='eventLogo ms-3' alt="" />
                            </div>
                            <p className="card-text cardSubTitle my-3 text-lg-start text-center">{subTitleOne}</p>

                            <div className='  mt-5'>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore " data-bs-toggle="modal" data-bs-target="#eventsModalOne">Learn More </Link>
                                <FaArrowCircleRight className='serviceArrow ms-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 d-none d-md-block" data-aos="flip-right">
                <div className="card  border-0 cardBg" >
                    <div className="eventsCarousol shadow-sm" >
                        <div className="card-body mt-3 p-xl-5 p-lg-3 p-2">
                            <div className=' d-flex'>
                                <div className='dateMonth text-center p-1'>
                                    <h3 className='fw-bold my-0'>17</h3>
                                    <p className='fw-bold my-0'>January</p>
                                </div>
                                <img src={imageTwo} className='eventLogo ms-3' alt="" />
                            </div>
                            <p className="card-text cardSubTitle my-3 text-lg-start text-center">{subTitleTwo}</p>

                            <div className=' mt-5'>
                                <Link to="/" className="text-decoration-none fw-bold learnMore " data-bs-toggle="modal" data-bs-target="#eventsModalTwo">Learn More </Link>
                                <FaArrowCircleRight className='serviceArrow ms-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <HomePageUpcomingEventsModalData></HomePageUpcomingEventsModalData>

        </div>

    );
};

export default EventsGridCarousolItem;
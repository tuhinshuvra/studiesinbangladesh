import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import './EventsGridCarousol.css';

const EventsGridCarousolItem = ({ titleOne, titleTwo, subTitleOne, subTitleTwo, imageOne, imageTwo }) => {
    return (
        <div className=" d-flex gap-3 mb-md-5 mb-3">

            <div className=" col-6 " data-aos="flip-left">
                <div className="card  border-0" >
                    <div className="eventsCarousol shadow-sm" >
                        <div className="card-body mt-3 p-xl-5 p-lg-3 p-2">
                            <div className=' d-flex'>
                                <img src={imageOne} className='eventLogo' alt="" />
                                <h4 className="commonSubHead text-primary text-center  ms-2">{titleOne}</h4>
                            </div>
                            <p className="card-text cardSubTitle my-3 text-lg-start text-center">{subTitleOne}</p>

                            <div className='  mt-5'>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore ">Learn More </Link>
                                <FaArrowCircleRight className='serviceArrow ms-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 d-none d-md-block" data-aos="flip-right">
                <div className="card  border-0" >
                    <div className="eventsCarousol shadow-sm" >
                        <div className="card-body mt-3 p-xl-5 p-lg-3 p-2">
                            <div className=' d-flex'>
                                <img src={imageTwo} className='eventLogo' alt="" />
                                <h4 className="commonSubHead text-primary text-center  ms-2">{titleTwo}</h4>
                            </div>
                            <p className="card-text cardSubTitle my-3 text-lg-start text-center">{subTitleTwo}</p>

                            <div className=' mt-5'>
                                <Link to="/" className=" text-decoration-none fw-bold learnMore ">Learn More </Link>
                                <FaArrowCircleRight className='serviceArrow ms-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default EventsGridCarousolItem;
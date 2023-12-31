import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../../../../assets/logo/sib_logo1.png'
import { FaFacebookF, FaYoutube, FaTwitter, } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container footer_bg">
            <footer className="pt-4">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-5 d-flex   ">
                        <div className=''>
                            <div className=' text-center text-md-start'>
                                <Link to="/" > <img className='footer_logo    mb-md-1' src={FooterLogo} alt="" /></Link>

                            </div>
                            <div className='footerSlogan'>
                                <p className='mx-auto footerSub  text-center text-lg-start'>We are available to consult for taking your higher education to the next level so that you can stay competitive.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-6   col-md-2">
                        <div className=''>

                            <h5 className='fw-bold text-center text-white'>Links</h5>

                            <ul className="nav flex-column ">
                                <li className="mb-2 text-center"><Link to="/academicInfo" className="  footer_btn fw-bold">Booking</Link></li>
                                <li className="mb-2 text-center"><Link to="/services" className="  footer_btn fw-bold">Sevices</Link></li>
                                <li className="mb-2 text-center"><Link to="/testimonial" className="  footer_btn fw-bold">Testimonial</Link></li>
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className=''>
                            <h5 className='fw-bold text-center text-white'>Links</h5>

                            <ul className="nav flex-column ">
                                <li className="mb-2 text-center"><Link to="/academicInfo" className="  footer_btn fw-bold">Booking</Link></li>
                                <li className="mb-2 text-center"><Link to="/services" className="  footer_btn fw-bold">Sevices</Link></li>
                                <li className="mb-2 text-center"><Link to="/testimonial" className="  footer_btn fw-bold">Testimonial</Link></li>
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="  col-md-4 col-lg-3 text-center text-md-start">
                        <h5 className=' fw-bold text-center text-white'>Office</h5>
                        <ul className="nav flex-column">
                            <p className=' text-white my-0'> <b>Address:</b> MAG House, House No-20, <br />
                                Shah Makhdum Avenue, Sector-11,
                                Uttara, Dhaka-1230, Bangladesh.</p>
                            <p className=' text-white my-0'> <b>Email:</b> info@gbl-bd.com</p>
                            <p className=' text-white my-0'> <b>Phone:</b> 02-224470053, 02-224470056, <br />
                                02-224470057 </p>
                        </ul>
                    </div>
                </div>
                <hr className=' text-white border-2' />

                <div className=" d-flex justify-content-center">
                    <div className=" ">
                        <a href="https://www.facebook.com/GorgeousBangladeshLtd" className=' text-white fs-4 text-decoration-none' target='_blank' rel="noreferrer"> <FaFacebookF></FaFacebookF></a>
                        <a href="https://www.facebook.com/GorgeousBangladeshLtd" className=' text-white fs-4 text-decoration-none' target='_blank' rel="noreferrer"> <FaYoutube></FaYoutube></a>
                        <a href="https://www.facebook.com/GorgeousBangladeshLtd" className=' text-white fs-4 text-decoration-none' target='_blank' rel="noreferrer"> <FaTwitter></FaTwitter></a>
                    </div>
                </div>

                <div className=" ">
                    <p className=' text-center mb-0 copyright_text'> <small>Copyright @ 2023, All right reserved by Studies in bangladesh</small></p>
                </div>
            </footer >
        </div >
    );
};

export default Footer;
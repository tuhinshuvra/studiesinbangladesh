import React from 'react';
// import navLogo from '../../../../assets/logo/sib_nav_logo.png'
import navLogo from '../../../../assets/logo/sib_logo1.png'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navBg '>
            {/* <nav className="navbar navbar-expand-lg fixed-top "> */}
            <nav className="navbar navbar-expand-md  ">
                <div className="container col-md-10 mx-auto">
                    <Link to="/" className="navbar-brand">
                        <img className='navLogo' src={navLogo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navCollapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-md-center align-items-md-center justify-content-end align-items-end ms-auto mb-2 mb-lg-0 fw-bold">


                            <li className="nav-item">
                                <Link className="navBtn mx-2 mx-lg-3" to="/services">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="navBtn mx-2 mx-lg-3" aria-current="page" to="/events">Events</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="navBtn mx-2 mx-lg-3 mb-md-0" to="/testimonial">Testimonials</Link>
                            </li>

                            <li>
                                <Link to="/apply">
                                    <button className='applyBtn mx-2 mx-lg-3'>Apply</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
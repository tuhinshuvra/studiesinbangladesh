import React from 'react';
import navLogo from '../../../../assets/logo/sib_nav_logo.png'
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
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/about">About Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link mx-lg-3" to="/services">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link  " to="/testimonial">Testimonials</Link>
                            </li>

                            <li>
                                <Link to="/apply">
                                    <button className='applyBtn ms-lg-3'>Apply</button>
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
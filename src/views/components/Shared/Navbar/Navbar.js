import React from 'react';
import navLogo from '../../../../assets/logo/sib_nav_logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navBg'>
            <nav className="navbar navbar-expand-lg navBg ">
                <div className="container-fluid col-md-11 mx-auto">
                    <Link to="/" className="navbar-brand" href="#">
                        <img className='navLogo' src={navLogo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" href="#">About Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link mx-3" href="#">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link mx-3" href="#">Testimonials</Link>
                            </li>

                            <li>
                                <button className=' applyBtn '>Apply</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
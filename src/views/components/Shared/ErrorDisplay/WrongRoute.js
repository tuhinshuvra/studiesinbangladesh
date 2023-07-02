import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import useTitle from '../Hooks/useTitle';
import './WrongRoute.css'
import useTitle from '../../../../hooks/useTitle';



const WrongRoute = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }, [navigate])

    useTitle('Wrong Route');

    return (
        <div className='error-page'>
            <h1 className='text404'>404</h1>
            <h2 className=' text-info text-3xl fw-bold' >We are sorry! Page not found</h2>
            <p className=' fs-5  fst-italic text-success my-0'>The page you are looking for might have been removed or had its name changed or is temporarily unavailable</p>

            <Link className=' btn btn-success btn-sm  font-bold text-decoration-none' to="/"> <h3>Go To Homepage</h3></Link>
        </div>
    );
};

export default WrongRoute;
import React from 'react';
import './GridCarousolItem.css';

const GridCarousolItem = ({ imgOne, imgTwo, imgThree }) => {
    return (
        <div className="row mb-md-5 mb-3">

            <div className=" col-md-4  col-sm-6" data-aos="flip-left">
                <img className="carousolImg" src={imgOne} alt="Card_image " />
            </div>

            <div className="  col-md-4  clearfix d-none d-md-block" data-aos="flip-right">
                <img className="carousolImg" src={imgTwo} alt="Card_image" />
            </div>

            <div className=" col-md-4  clearfix d-none d-md-block" data-aos="flip-left">
                <img className="carousolImg" src={imgThree} alt="Card_image " />
            </div>

        </div>

    );
};

export default GridCarousolItem;
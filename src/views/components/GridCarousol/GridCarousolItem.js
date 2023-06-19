import React from 'react';
import './GridCarousolItem.css';

const GridCarousolItem = ({ imgOne, imgTwo, imgThree }) => {
    return (
        <div className="row">

            <div className=" col-md-4  col-sm-6" data-aos="flip-left">
                {/* <div className="card mb-2 mx-md-0 mx-2"> */}
                <img className="carousolImg" src={imgOne} alt="Card_image " />
                {/* </div> */}
            </div>

            <div className="  col-md-4  clearfix d-none d-md-block" data-aos="flip-right">
                {/* <div className="card mb-2 mx-md-0 mx-3"> */}
                <img className="carousolImg" src={imgTwo} alt="Card_image" />
                {/* </div> */}
            </div>

            <div className=" col-md-4  clearfix d-none d-md-block" data-aos="flip-left">
                {/* <div className="card mb-2 mx-md-0 mx-3"> */}
                <img className="carousolImg" src={imgThree} alt="Card_image " />
                {/* </div> */}
            </div>

        </div>

    );
};

export default GridCarousolItem;
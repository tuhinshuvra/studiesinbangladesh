import React from 'react';
import './CountriesGridCarousol.css';

const CountriesGridCarousolItem = ({ titleOne, titleTwo, titleThree, subTitleOne, subTitleTwo, subTitleThree, imageOne, imageTwo, imageThree }) => {
    return (
        <div className=" d-flex">

            <div className=" col-md-4 " data-aos="flip-left">
                <div className="card  border-0" >
                    <div className="contriesCarousol" >
                        <div className="card-body">
                            <div className=''>
                                <img src={imageOne} className='contryImage' alt="" />
                            </div>
                            <h4 className="text-center cardTitle ms-2">{titleOne}</h4>
                            <p className="card-text subTitle my-3">{subTitleOne}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4" data-aos="flip-right">
                <div className="card  border-0" >
                    <div className="contriesCarousol" >
                        <div className="card-body">
                            <div className=''>
                                <img src={imageTwo} className='contryImage' alt="" />
                            </div>
                            <h4 className="text-center cardTitle ms-2">{titleTwo}</h4>
                            <p className="card-text subTitle my-3">{subTitleTwo}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4" data-aos="flip-right">
                <div className="card  border-0" >
                    <div className="contriesCarousol" >
                        <div className="card-body">
                            <div className=''>
                                <img src={imageThree} className='contryImage' alt="" />
                            </div>
                            <h4 className="text-center cardTitle ms-2">{titleThree}</h4>
                            <p className="card-text subTitle my-3">{subTitleThree}</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default CountriesGridCarousolItem;
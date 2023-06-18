import React from 'react';
import GridCarousolItem from './GridCarousolItem';



import './GridCarousol.css'

const GridCarousol = () => {
	// fareOne, fareTwo, fareThree, fareFive
	return (
		<div className=' col-md-11 mx-auto'>
			{/* ########################## domestic locations flights ################################ */}

			<h1 className=' text-center fw-bold pt-lg-5  location_heading '> Popular Locations </h1>
			<h2 className='text-center fw-bold pt-lg-2   location_heading mb-lg-3'> Domestic Flights</h2>
			<div id="domesticGridCarousol" className="carousel  carousel-dark slide">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="1000">
						<GridCarousolItem
							imgOne={Barisal}
							locationOne="Barishal"
							fareOne="11995"

							imgTwo={Chattogram}
							locationTwo="Chattogram"
							fareTwo="9995"

							imgThree={Jessore}
							locationThree="Jessore"
							fareThree="10995"


						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="1000">
						<GridCarousolItem
							imgOne={Saidpur}
							locationOne="Saidpur"
							fareOne="11995"

							imgTwo={Sylhet}
							locationTwo="Sylhet"
							fareTwo="9995"

							imgThree={Thakurgaon}
							locationThree="Thakurgaon"
							fareThree="10995"

							imgFour={Jessore}
							locationFour="Jessore"
							fareFour="10995"
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="1000">
						<GridCarousolItem
							imgOne={Saidpur}
							locationOne="Saidpur"
							fareOne="11995"

							imgTwo={Chattogram}
							locationTwo="Chattogram"
							fareTwo="9995"

							imgThree={Rajshahi}
							locationThree="Rajshahi"
							fareThree="10995"

							imgFour={Jessore}
							locationFour="Jessore"
							fareFour="10995"
						></GridCarousolItem>
					</div>

				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>


			{/* ########################## internationl locations flights ################################ */}
			<h2 className='text-center fw-bold pt-lg-5 nag_heading  location_heading mb-lg-3'> International Flights</h2>
			<div id="internationalGridCarousol" className="carousel  carousel-dark slide">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="1000">
						<GridCarousolItem
							imgOne={Singapore}
							locationOne="Singapore"
							fareOne="101995"

							imgTwo={Beijing}
							locationTwo="Beijing"
							fareTwo="99995"

							imgThree={Delhi}
							locationThree="Delhi"
							fareThree="110995"

							imgFour={HongKong}
							locationFour="HongKong"
							fareFour="100995"

						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="1000">
						<GridCarousolItem
							imgOne={Mumbai}
							locationOne="Mumbai"
							fareOne="20995"

							imgTwo={Singapore}
							locationTwo="Singapore"
							fareTwo="45995"

							imgThree={Jeddah}
							locationThree="Jeddah"
							fareThree="70995"

							imgFour={Shanghai}
							locationFour="Shanghai"
							fareFour="80995"
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="1000">
						<GridCarousolItem
							imgOne={Dubai}
							locationOne="Dubai"
							fareOne="60995"

							imgTwo={Doha}
							locationTwo="Doha"
							fareTwo="50095"

							imgThree={Bangalore}
							locationThree="Bangalore"
							fareThree="18995"

							imgFour={Jeddah}
							locationFour="Jeddah"
							fareFour="75995"
						></GridCarousolItem>
					</div>

				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#internationalGridCarousol" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#internationalGridCarousol" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>


	);
};

export default GridCarousol;
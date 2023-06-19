import React from 'react';
import CountriesGridCarousolItem from './CountriesGridCarousolItem';
import imageOne from '../../../../assets/countryImage/canada.png'
import imageTwo from '../../../../assets/countryImage/australia.png'
import imageThree from '../../../../assets/countryImage/united-kingdom.png'
import imageFour from '../../../../assets/countryImage/australia.png'
import imageFive from '../../../../assets/countryImage/united-kingdom.png'
import imageSix from '../../../../assets/countryImage/canada.png'
import './CountriesGridCarousol.css';

const CountriesGridCarousol = () => {
	// fareOne, fareTwo, fareThree, fareFive
	return (
		<div className=' mx-auto '>
			{/* ########################## domestic locations flights ################################ */}

			<div id="contriesGridCarousol" className="carousel  carousel-dark slide">
				<div className="carousel-indicators eventCarButton">
					<button type="button" data-bs-target="#contriesGridCarousol" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#contriesGridCarousol" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#contriesGridCarousol" data-bs-slide-to="2" aria-label="Slide 3"></button>
					<button type="button" data-bs-target="#contriesGridCarousol" data-bs-slide-to="3" aria-label="Slide 4"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="2000">
						<CountriesGridCarousolItem
							imageOne={imageOne}
							titleOne="Study in Canada"
							subTitleOne="Study in the Canada and integrate into the society as a professional and start your life"

							imageTwo={imageTwo}
							titleTwo="Study in Australia"
							subTitleTwo="Study in the Austrelia and integrate into the society as a professional and start your life "

							imageThree={imageThree}
							titleThree="Study in United Kingdom"
							subTitleThree="Study in the United Kingdom and integrate into the society as a professional and start your life "

						></CountriesGridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<CountriesGridCarousolItem
							imageOne={imageFour}
							titleOne="Study in USA"
							subTitleOne="Study in the Canada and integrate into the society as a professional and start your life"

							imageTwo={imageFive}
							titleTwo="Study in Russia"
							subTitleTwo="Study in the Austrelia and integrate into the society as a professional and start your life "

							imageThree={imageSix}
							titleThree="Study in Japan"
							subTitleThree="Study in the United Kingdom and integrate into the society as a professional and start your life "
						></CountriesGridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<CountriesGridCarousolItem
							imageOne={imageOne}
							titleOne="Study in Canada"
							subTitleOne="Study in the Canada and integrate into the society as a professional and start your life"

							imageTwo={imageTwo}
							titleTwo="Study in Australia"
							subTitleTwo="Study in the Austrelia and integrate into the society as a professional and start your life "

							imageThree={imageThree}
							titleThree="Study in United Kingdom"
							subTitleThree="Study in the United Kingdom and integrate into the society as a professional and start your life "
						></CountriesGridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<CountriesGridCarousolItem
							imageOne={imageFour}
							titleOne="Study in Jermany"
							subTitleOne="Study in the Canada and integrate into the society as a professional and start your life"

							imageTwo={imageFive}
							titleTwo="Study in Australia"
							subTitleTwo="Study in the Austrelia and integrate into the society as a professional and start your life "

							imageThree={imageSix}
							titleThree="Study in USA"
							subTitleThree="Study in the United Kingdom and integrate into the society as a professional and start your life "
						></CountriesGridCarousolItem>
					</div>

				</div>
			</div>

		</div>


	);
};

export default CountriesGridCarousol;
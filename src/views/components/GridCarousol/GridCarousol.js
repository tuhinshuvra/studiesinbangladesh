import React from 'react';
import GridCarousolItem from './GridCarousolItem';

import CollegeOne from '../../../assets/mediclaCollegeLogo/bangladeshMedicalCollege.png'
import CollegeTwo from '../../../assets/mediclaCollegeLogo/enamMedicalCollege.png'
import CollegeThree from '../../../assets/mediclaCollegeLogo/greenLifeCollege.png'
import CollegeFour from '../../../assets/mediclaCollegeLogo/magOsmaniMedicalCollege.jpg'
import CollegeFive from '../../../assets/mediclaCollegeLogo/rajshahiMedicalCollege.png'
import CollegeSix from '../../../assets/mediclaCollegeLogo/popularMedicalCollege.png'
import CollegeSeven from '../../../assets/mediclaCollegeLogo/shahidSuhrawardyMedicalCollege.png'
import CollegeEight from '../../../assets/mediclaCollegeLogo/redcrecentMedicalCollege.jpg'
import CollegeNine from '../../../assets/mediclaCollegeLogo/usBanglaMedicalCollege.png'

import './GridCarousol.css'

const GridCarousol = () => {
	return (
		<div className=' col-md-11 mx-auto '>

			<div id="featureUniversities" className="carousel  carousel-dark carColor slide" data-bs-ride="carousel" data-aos="fade-up">
				<div className="carousel-indicators carButton">
					<button type="button" data-bs-target="#featureUniversities" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#featureUniversities" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#featureUniversities" data-bs-slide-to="2" aria-label="Slide 3"></button>
					<button type="button" data-bs-target="#featureUniversities" data-bs-slide-to="3" aria-label="Slide 4"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="4000">
						<GridCarousolItem
							imgOne={CollegeOne}
							imgTwo={CollegeTwo}
							imgThree={CollegeThree}
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<GridCarousolItem
							imgOne={CollegeFour}
							imgTwo={CollegeFive}
							imgThree={CollegeSix}
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<GridCarousolItem
							imgOne={CollegeSeven}
							imgTwo={CollegeEight}
							imgThree={CollegeNine}
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<GridCarousolItem
							imgOne={CollegeTwo}
							imgTwo={CollegeFive}
							imgThree={CollegeSix}
						></GridCarousolItem>
					</div>

				</div>
			</div>

		</div>


	);
};

export default GridCarousol;
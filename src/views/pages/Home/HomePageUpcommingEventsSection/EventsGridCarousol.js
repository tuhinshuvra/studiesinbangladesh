import React from 'react';
import EventsGridCarousolItem from './EventsGridCarousolItem';
import imageOne from '../../../../assets/roundLogo/bangladeshMedical.png'
import imageTwo from '../../../../assets/roundLogo/chitagongMedical.png'
import imageThree from '../../../../assets/roundLogo/dhakaMedicalCollege.png'
import imageFour from '../../../../assets/roundLogo/dhakanationalMedical.png'
import imageFive from '../../../../assets/roundLogo/popular.png'
import imageSix from '../../../../assets/roundLogo/rangamatiMedical.jpg'
import './EventsGridCarousol.css';

const EventsGridCarousol = () => {
	// fareOne, fareTwo, fareThree, fareFive
	return (
		<div className=' mx-auto '>
			{/* ########################## domestic locations flights ################################ */}

			<div id="eventsGridCarousol" className="carousel  carousel-dark carColor slide">
				<div className="carousel-indicators carButton">
					<button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="2" aria-label="Slide 3"></button>
					<button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="3" aria-label="Slide 4"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="2000">
						<EventsGridCarousolItem
							imageOne={imageOne}
							titleOne="The University of Western Australia"
							subTitleOne="This event will cover the administrative life cycle of the students increased in the University
							 of Western Australia. This is a 4 hour event with a separate Q&A session after the end of the event."

							imageTwo={imageTwo}
							titleTwo="Monash University "
							subTitleTwo="This event will cover the administrative life cycle of the students increased in the Monash University. 
							This is a 4 hour event with a separate Q&A session after the end of the event. "

						></EventsGridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<EventsGridCarousolItem
							imageOne={imageThree}
							titleOne="The University of Central England"
							subTitleOne="This event will cover the administrative life cycle of the students increased in the University
 							of Western Australia. This is a 4 hour event with a separate Q&A session after the end of the event."

							imageTwo={imageFour}
							titleTwo="Monash University "
							subTitleTwo="This event will cover the administrative life cycle of the students increased in the Monash University. 
								This is a 4 hour event with a separate Q&A session after the end of the event. "
						></EventsGridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<EventsGridCarousolItem
							imageOne={imageFive}
							titleOne="Maritime College of Australia"
							subTitleOne="This event will cover the administrative life cycle of the students increased in the University
 								of Western Australia. This is a 4 hour event with a separate Q&A session after the end of the event."

							imageTwo={imageFour}
							titleTwo="Monash University "
							subTitleTwo="This event will cover the administrative life cycle of the students increased in the Monash University. 
								This is a 4 hour event with a separate Q&A session after the end of the event."
						></EventsGridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="2000">
						<EventsGridCarousolItem
							imageOne={imageThree}
							titleOne="The University of Estern Australia"
							subTitleOne="This event will cover the administrative life cycle of the students increased in the University
 								of Western Australia. This is a 4 hour event with a separate Q&A session after the end of the event."

							imageTwo={imageFive}
							titleTwo="Monash University "
							subTitleTwo="This event will cover the administrative life cycle of the students increased in the Monash University. 
									This is a 4 hour event with a separate Q&A session after the end of the event. "
						></EventsGridCarousolItem>
					</div>

				</div>
			</div>

		</div>


	);
};

export default EventsGridCarousol;
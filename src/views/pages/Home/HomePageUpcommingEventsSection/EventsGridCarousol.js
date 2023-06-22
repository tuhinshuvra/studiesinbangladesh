import React from 'react';
import EventsGridCarousolItem from './EventsGridCarousolItem';
import imageOne from '../../../../assets/mediclaCollegeLogo/rajshahiMedicalCollege.png'
import imageTwo from '../../../../assets/mediclaCollegeLogo/armdForceMedicalCollege.jpg'
import imageThree from '../../../../assets/mediclaCollegeLogo/bangladeshMedicalCollege.png'
import imageFour from '../../../../assets/mediclaCollegeLogo/enamMedicalCollege.png'
import imageFive from '../../../../assets/mediclaCollegeLogo/greenLifeCollege.png'
import imageSix from '../../../../assets/mediclaCollegeLogo/shahidSuhrawardyMedicalCollege.png'
import './EventsGridCarousol.css';

const EventsGridCarousol = () => {
	return (
		<div className='col-md-11 mx-auto '>

			<div id="eventsGridCarousol" className="carousel  carousel-dark carColor slide" data-bs-ride="carousel">

				<div className="carousel-indicators carButton">
					<button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="2" aria-label="Slide 3"></button>
					<button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="3" aria-label="Slide 4"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="4000">
						<EventsGridCarousolItem
							imageOne={imageOne}
							dateMonth="eventsDate"
							subTitleOne="This event will cover the administrative life cycle of the students increased in the Monash University. 
							This is a 4 hour event with a separate Q&A session after the end of the event."

							imageTwo={imageTwo}
							dateMonth2="eventsDate"
							subTitleTwo="This event will cover the administrative life cycle of the students increased in the Monash University. 
							This is a 4 hour event with a separate Q&A session after the end of the event."
						></EventsGridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<EventsGridCarousolItem
							imageOne={imageThree}
							dateMonth="eventsDate"
							subTitleOne="This event will cover the administrative life cycle of the students increased in the Monash University. 
							This is a 4 hour event with a separate Q&A session after the end of the event."

							imageTwo={imageFour}
							dateMonth2="eventsDate"
							subTitleTwo="This event will cover the administrative life cycle of the students increased in the Monash University. 
								This is a 4 hour event with a separate Q&A session after the end of the event."
						></EventsGridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<EventsGridCarousolItem
							imageOne={imageFive}
							dateMonth="eventsDate"
							subTitleOne="This event will cover the administrative life cycle of the students increased in the Monash University. 
							This is a 4 hour event with a separate Q&A session after the end of the event.."

							imageTwo={imageFour}
							dateMonth2="eventsDate"
							subTitleTwo="This event will cover the administrative life cycle of the students increased in the Monash University. 
								This is a 4 hour event with a separate Q&A session after the end of the event."
						></EventsGridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<EventsGridCarousolItem
							imageOne={imageThree}
							dateMonth="eventsDate"
							subTitleOne="This event will cover the administrative life cycle of the students increased in the Monash University. 
							This is a 4 hour event with a separate Q&A session after the end of the event.."

							imageTwo={imageFive}
							dateMonth2="eventsDate"
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
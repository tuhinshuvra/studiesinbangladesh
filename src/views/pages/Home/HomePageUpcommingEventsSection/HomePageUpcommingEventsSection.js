import React from 'react';
import EventsGridCarousol from './EventsGridCarousol';
import './HomePageUpcommingEventsSection.css';

const HomePageUpcommingEventsSection = () => {
    return (
        <div className='eventsArea'>
            <h2 className='common_Heading text-center text-primary'>Upcoming University Events</h2>
            <div className='col-md-9 mx-auto my-5'>
                <p className='servicesSub text-center'>
                    Please make sure to attend the suitable events from the following after you've
                    signed up. These events will help you to understand  the specifics.
                </p>
            </div>
            <EventsGridCarousol></EventsGridCarousol>
        </div>
    );
};

export default HomePageUpcommingEventsSection;
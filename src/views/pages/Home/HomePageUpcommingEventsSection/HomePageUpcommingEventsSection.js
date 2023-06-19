import React from 'react';
import './HomePageUpcommingEventsSection.css';
import EventsGridCarousol from './EventsGridCarousol';

const HomePageUpcommingEventsSection = () => {
    return (
        <div>
            <h2 className=' text-center featured_Head  '>Upcoming University Events</h2>
            <div className='col-md-9 mx-auto my-5'>
                <p className='servicesSub'>
                    Please make sure to attend the suitable events from the following after you've
                    signed up. These events will help you to understand  the specifics.
                </p>
            </div>
            <EventsGridCarousol></EventsGridCarousol>
        </div>
    );
};

export default HomePageUpcommingEventsSection;
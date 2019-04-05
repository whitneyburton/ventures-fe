import React, { useState, useEffect } from 'react';
import { mockEvents } from '../../data/mockData';

export const EventPopUp = (props) => {
  const [event, setEvent] =  useState({});

  const getEvent = () => {
    // call individual id thunk
    setEvent(mockEvents.data[0]);
  }

  useEffect(() => {
    getEvent()
  })

  if (event.attributes) {
    const { name, city, state, event_type, price, start_date, end_date, description, event_url, image_url, video_url } = event.attributes;
    return (
      <div className='event-pop-up'>
        <div className='image-container'><img src={image_url} alt='event photo' /></div>
        <h2>{name}</h2>
        <h4>{city}, {state}</h4>
        <h4>Dates: {start_date} - {end_date}</h4>
        <h4>{event_type}</h4>
        <h4>{price}</h4>
        <p>{description}</p>
        <a href={event_url}>Event Website</a>
      </div>
    )
  } else {
    return(<div>Loading...</div>)
  }

}

export default EventPopUp;
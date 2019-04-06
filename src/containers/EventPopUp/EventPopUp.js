import React, { useState, useEffect } from 'react';
import { mockEvents } from '../../data/mockData';
import { Link } from 'react-router-dom';

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
      <div className='EventPopUp'>
        <div className='image-container'>
          <img src={image_url} alt='event photo' />
        </div>
        <h2>{name}</h2>
        <h4>{city}, {state}</h4>
        <h4>Dates: <span className='light-text'>
          {start_date === end_date ? {start_date} : `${start_date} to ${end_date}`}
        </span></h4>
        <h4 className='event-type'>Event Type: <span className='light-text'>{event_type}</span></h4>
        <h4>Price: <span className='light-text'>${price}</span></h4>
        <p>{description}</p>
        <a className='event-link' href={event_url}>Event Website</a>
        <div className='button-div'>
          <button className='wishlist-button'></button>
          <button className='attending-button'></button>
        </div>
        <Link to='/' className='close-pop-up'></Link>
      </div>
    )
  } else {
    return(<div>Loading...</div>)
  }
  
}

export default EventPopUp;
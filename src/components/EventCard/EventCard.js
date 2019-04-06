import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ id, name, image, city, state, date }) => {
  return(
    <Link to={`/event/${id}`}>
      <div className='EventCard' style={{ backgroundImage: `url(${image})`}}>
        <div className='text-container'>
          <h3 className='card-name'>{name}</h3>
          <h5 className='card-location'>{city}, {state}</h5>
          <h5 className='card-date'>{date}</h5>
        </div>
      </div>
    </Link>
  )
}

export default EventCard;
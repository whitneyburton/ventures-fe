import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvent } from '../../thunks/getEvent';

export const EventPopUp = ({ getEvent, match, history }) => {
  const [event, updateEvent] =  useState({});
  const [showVideo, updateShowVideo] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getEvent(match.params.id);
      updateEvent(event)
    }
    fetchEvent();
  }, []);

  const displayToShow = () => {
    const { image_url, video_url } = event;
    if (showVideo) {
      return (<iframe title='Event Video' className='image-container' src={video_url}></iframe>)
    } else {
      return (<div className='image-container' style={{ backgroundImage: `url(${image_url})` }}></div>)
    }
  }

  if (event.name) {
    const { name, city, state, event_type, price, start_date, end_date, description, event_url } = event;
    return (
      <div className='overlay'>
        <div className='EventPopUp'>
          <div className='display-panel'>
            {displayToShow()}
            <button className={showVideo ? 'back arrow' : 'forward arrow'} onClick={() => updateShowVideo(!showVideo)}></button>
          </div>
          <div className='text-container'>
            <button onClick={() => history.goBack()} className='close-pop-up'></button>
            <h2>{name}</h2>
            <h4>{city}, {state}</h4>
            <h4>Date(s): <span className='light-text'>
              {start_date === end_date ? `${start_date}` : `${start_date} to ${end_date}`}
            </span></h4>
            <h4 className='event-type'>Event Type: <span className='light-text'>{event_type}</span></h4>
            <h4>Price: <span className='light-text'>${price}</span></h4>
            <p>{description}</p>
            <a className='event-link' href={event_url}>Event Website</a>
            <div className='button-div'>
              <button className='wishlist-button'></button>
              <button className='attending-button'></button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return(<div>Loading...</div>)
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getEvent: (id) => dispatch(getEvent(id)),
});

export default connect(null, mapDispatchToProps)(EventPopUp);

EventPopUp.propTypes = {
  getEvent: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object
}
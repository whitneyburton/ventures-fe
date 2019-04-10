import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvent } from '../../thunks/getEvent';
import { changeUserEvent } from '../../thunks/changeUserEvent';
import { getUserEvents } from '../../thunks/getUserEvents';
import ReactTooltip from 'react-tooltip';

export const EventPopUp = ({ getEvent, match, history, userEvents, changeUserEvent, getUserEvents }) => {
  const [event, updateEvent] =  useState({});
  const [showVideo, updateShowVideo] = useState(false);
  const [status, updateStatus] = useState('');

  const getStatus = (id) => {
    const match = userEvents.find(event => event.id === id);
    if (match) {
      updateStatus(match.attributes.status)
    }
  }

  const updateEventStatus = async (e) => {
    const { id } = match.params;
    const newStatus = e.target.id;
    if (status === '') {
      await changeUserEvent(id, 'POST', newStatus);
      updateStatus(newStatus);
    } else if (status === newStatus) {
      await changeUserEvent(id, 'DELETE');
      updateStatus('');
    } else {
      await changeUserEvent(id, 'PUT', newStatus);
      updateStatus(newStatus);
    }
    await getUserEvents('1');
  }
  
  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getEvent(match.params.id);
      updateEvent(event);
    }
    fetchEvent();
    getStatus(match.params.id);
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
              <button 
                id='wishlist' 
                data-tip
                data-for='wishlist-tip'
                onClick={updateEventStatus} 
                className=
                {(status === 'wishlist') ? 'wishlist-button wishlist-active' : 'wishlist-button'}
              >
              </button>
              <ReactTooltip id='wishlist-tip' type='dark' effect='solid' place='left'>
                {(status === 'wishlist') ? 'Remove from wishlist' : 'Add to wishlist'}
              </ReactTooltip>
              <button 
                id='attending' 
                data-tip
                data-for='attending-tip'
                onClick={updateEventStatus} 
                className=
                {(status === 'attending') ? 'attending-button attending-active' : 'attending-button'}
              >
              </button>
              <ReactTooltip id='attending-tip' type='dark' effect='solid'>
                {(status === 'attending') ? 'Remove from attending' : 'Add to attending'}
              </ReactTooltip>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (<div>Loading...</div>)
  }
}

export const mapStateToProps = (state) => ({
  userEvents: state.userEvents,
});

export const mapDispatchToProps = (dispatch) => ({
  getEvent: (id) => dispatch(getEvent(id)),
  changeUserEvent: (id, method, status) => dispatch(changeUserEvent(id, method, status)),
  getUserEvents: (id) => dispatch(getUserEvents(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPopUp);

EventPopUp.propTypes = {
  getEvent: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object
}
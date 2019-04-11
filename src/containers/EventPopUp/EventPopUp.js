import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvent } from '../../thunks/getEvent';
import { changeUserEvent } from '../../thunks/changeUserEvent';
import { getUserEvents } from '../../thunks/getUserEvents';

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
    } else if (status === newStatus) {
      await changeUserEvent(id, 'DELETE');
    } else {
      await changeUserEvent(id, 'PUT', newStatus);
    }
    await getUserEvents('1');
    updateStatus(newStatus);
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
      <Fragment>
        <div className='overlay'></div>
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
                <button id='wishlist' onClick={updateEventStatus} className=
                  {(status === 'wishlist') ? 'wishlist-button wishlist-active' : 'wishlist-button'}
                ></button>
                <button id='attending' onClick={updateEventStatus} className=
                  {(status === 'attending') ? 'attending-button attending-active' : 'attending-button'}
                ></button>
              </div>
            </div>
          </div>
      </Fragment>
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
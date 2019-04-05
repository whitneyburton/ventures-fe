import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard/EventCard';

export const EventContainer = (props) => {
    return (
      <div className='EventContainer'>
      {
        props.events.map(event => 
          <EventCard 
            id={event.id}
            name={event.attributes.name}
            image={event.attributes.image_url}
            city={event.attributes.city}
            state={event.attributes.state}
            date={event.attributes.start_date}
          />
        )
      }
      </div>
    )
}

export const mapStateToProps = (state) => ({
  events: state.events,
})

export default connect(mapStateToProps)(EventContainer);


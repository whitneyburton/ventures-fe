import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard/EventCard';

export const EventContainer = ({ pathname, events }) => {
  const styles = pathname.includes('profile') ? 'EventContainer profile' : 'EventContainer home';
    return (
      <div className={styles}>
      {
        events.map(event => 
          <EventCard 
            id={event.id}
            key={event.id}
            name={event.attributes.name}
            image={event.attributes.image_url}
            city={event.attributes.city}
            state={event.attributes.state}
            date={event.attributes.start_date}
            pathname={pathname}
          />
        )
      }
      </div>
    )
}

export const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps)(EventContainer);

EventContainer.propTypes = {
  events: PropTypes.array
}
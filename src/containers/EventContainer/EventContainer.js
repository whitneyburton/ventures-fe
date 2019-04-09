import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard/EventCard';

export const EventContainer = ({ pathname, events, userEvents }) => {
  const allEvents = events.map(event => (
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
  ));

  const tabOptions = ['attending', 'wishlist', 'past'];
  const tabEvents = tabOptions.map(option => {
    return userEvents
      .filter(event => event.attributes.status === `${option}`)
      .map(event => {
        return (
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
        );
      });
  });

  const styles = pathname.includes('profile')
    ? 'EventContainer profile'
    : 'EventContainer home';

  if (pathname.includes('upcoming')) {
    return <div className={styles}>{tabEvents[0]}</div>;
  } else if (pathname.includes('wishlist')) {
    return <div className={styles}>{tabEvents[1]}</div>;
  } else if (pathname.includes('past')) {
    return <div className={styles}>{tabEvents[2]}</div>;
  } else {
    return <div className={styles}>{allEvents}</div>;
  }
};

export const mapStateToProps = state => ({
  events: state.events,
  userEvents: state.userEvents
});

export default connect(mapStateToProps)(EventContainer);

EventContainer.propTypes = {
  events: PropTypes.array,
  userEvents: PropTypes.array
};
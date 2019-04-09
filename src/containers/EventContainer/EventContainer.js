import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard/EventCard';

export const EventContainer = ({
  pathname,
  events,
  searchText,
  userEvents
}) => {
  
  const styles = pathname.includes('profile')
    ? 'EventContainer profile'
    : 'EventContainer home';

  const filterEvents = () => {
    return events.filter(event => {
      const { name, city, state } = event.attributes;
      const text = name + ' ' + city + ' ' + state;
      return text.toUpperCase().includes(searchText.toUpperCase());
    });
  };

  const filterUserEvents = status => {
    return userEvents.filter(event => event.attributes.status === status);
  };

  let shownEvents;

  if (pathname.includes('upcoming')) {
    shownEvents = filterUserEvents('attending');
  } else if (pathname.includes('wishlist')) {
    shownEvents = filterUserEvents('wishlist');
  } else if (pathname.includes('past')) {
    shownEvents = filterUserEvents('past');
  } else {
    shownEvents = searchText.length ? filterEvents() : events;
  }

  return (
    <div className={styles}>
      {shownEvents.map(event => {
        const { name, image_url, city, state, start_date } = event.attributes;
        return (
          <EventCard
            id={event.id}
            key={event.id}
            name={name}
            image={image_url}
            city={city}
            state={state}
            date={start_date}
            pathname={pathname}
          />
        );
      })}
    </div>
  );
};

export const mapStateToProps = state => ({
  searchText: state.searchText,
  events: state.events,
  userEvents: state.userEvents
});

export default connect(mapStateToProps)(EventContainer);

EventContainer.propTypes = {
  events: PropTypes.array,
  userEvents: PropTypes.array,
  searchText: PropTypes.string
};

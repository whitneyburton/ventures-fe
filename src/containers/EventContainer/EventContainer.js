import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard/EventCard';

export const EventContainer = ({ pathname, events, searchText }) => {
  const styles = pathname.includes('profile') ? 'EventContainer profile' : 'EventContainer home';

  const filterEvents = () => {
    return events.filter(event => {
      const { name, city, state } = event.attributes;
      const text = name + ' ' + city + ' ' + state;
      return text.toUpperCase().includes(searchText.toUpperCase())
    })
  };

  const shownEvents = searchText.length ? filterEvents() : events;
  
  return (
    <div className={styles}>
      {
        shownEvents.map(event => {
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
          )
        })
      }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  searchText: state.searchText,
  events: state.events,
});

export default connect(mapStateToProps)(EventContainer);

EventContainer.propTypes = {
  events: PropTypes.array,
  searchText: PropTypes.string,
}
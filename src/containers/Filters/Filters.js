import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../thunks/getEvents';

export const Filters = ({ events, getEvents }) => {
  const [eventType, updateType] = useState('');
  const [month, updateMonth] = useState('');
  const [state, updateState] = useState('');

  useEffect(() => {
    getEvents(eventType, month, state)
  }, [eventType, month, state]);

  const setFilters = (filter) => {
    const uniqueFilters = events.reduce((acc, event) => {
      if (!acc.includes(event.attributes[filter])) {
        acc.push(event.attributes[filter])
      }
      return acc
    }, []);
    return uniqueFilters.map(item => {
      const formattedItem = filter === 'event_type' ? formatType(item) : item;
      return (<option key={item} value={item}>{formattedItem}</option>)
    })
  }

  const setMonthFilter = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (month !== '') {
      return (<option key={month} value={month}>{months[month-1]}</option>)
    } else {
      return months.map((month, index) => {
        const matchingEvents = events.filter(event => {
          const eventMonth = event.attributes.start_date.split('-')[0];
          return parseInt(eventMonth) === index + 1
        })
        return (<option key={month} value={index+1}>{month} ({matchingEvents.length})</option>)
      })
    }
  }

  const formatType = (item) => {
    let itemArr = item.split('');
    itemArr[0] = itemArr[0].toUpperCase();
    return itemArr.join('');
  }

  if (events) {
    return (
      <div className="Filters">
        <h3 className="filters-title">FILTER EVENTS</h3>
        <select
          name="event_type"
          value={eventType}
          onChange={(e) => updateType(e.target.value)}
        >
          <option key='Type' value=''>All Event Types</option>
          {setFilters('event_type')}
        </select>
        <select
          name="month"
          value={month}
          onChange={(e) => updateMonth(e.target.value)}
        >
          <option key='Month' value=''>All Months</option>
          {setMonthFilter()}
        </select>
        <select
          name="state"
          value={state}
          onChange={(e) => updateState(e.target.value)}
        >
          <option key='State'value=''>All States</option>
          {setFilters('state')}
        </select>
      </div>
    );
  } else {
    return(<div></div>)
  }
}

export const mapStateToProps = (state) => ({
  events: state.events,
});

export const mapDispatchToProps = (dispatch) => ({
  getEvents: (type, state, month) => dispatch(getEvents(type, state, month)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

Filters.propTypes = {
  events: PropTypes.array
}
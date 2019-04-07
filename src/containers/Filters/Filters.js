import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Filters = ({ events }) => {
  const [eventType, updateType] = useState('');
  const [month, updateMonth] = useState('');
  const [state, updateState] = useState('');

  const setFilters = (filter) => {
    const uniqueFilters = events.reduce((acc, event) => {
      if (!acc.includes(event.attributes[filter])) {
        acc.push(event.attributes[filter])
      }
      return acc
    }, []);
    return uniqueFilters.map(item => {
      const formattedItem = filter === 'event_type' ? formatType(item) : item;
      return (<option value={`${item}`}>{formattedItem}</option>)
    })
  }

  const setMonthFilter = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.map((month, index) => {
      const matchingEvents = events.filter(event => {
        const eventMonth = event.attributes.start_date.split('-')[0];
        return parseInt(eventMonth) === index + 1
      })
    return (<option value={`${month}`}>{month} ({matchingEvents.length})</option>)
    })
  }

  const formatType = (item) => {
    let itemArr = item.split('');
    itemArr[0] = itemArr[0].toUpperCase();
    return itemArr.join('');
  }

  if (events.length) {
    return (
      <div className="Filters">
        <h3 className="filters-title">FILTER EVENTS</h3>
        <select
          name="event_type"
          value={eventType}
          onChange={(e) => updateType(e.target.value)}
        >
          <option value="">Event Type</option>
          {setFilters('event_type')}
        </select>
        <select
          name="month"
          value={month}
          onChange={(e) => updateMonth(e.target.value)}
        >
          <option value="Month">Month</option>
          {setMonthFilter()}
        </select>
        <select
          name="state"
          value={state}
          onChange={(e) => updateState(e.target.value)}
        >
          <option value="State">State</option>
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

export default connect(mapStateToProps)(Filters);

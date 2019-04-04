import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Filters = (props) => {
  const handleChange = event => {
    const { name, value } = event.target;
  };

  return (
    <div className="Filters">
      <h3 className="filters-title">FILTER EVENTS</h3>
      <select
        name="event_type"
        value={''}
        onChange={handleChange}
      >
        <option value="">Event Type</option>
      </select>
      <select
        name="start_date"
        value={''}
        onChange={handleChange}
      >
        <option value="Date">Date</option>
      </select>
      <select
        name="state"
        value={''}
        onChange={handleChange}
      >
        <option value="Location">Location</option>
      </select>
    </div>
  );
}

export default Filters;

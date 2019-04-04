import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Filters extends Component {
  constructor() {
    super();
    this.state = {
      typeSelection: '',
      dateSelection: '',
      locationSelection: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { typeSelection, dateSelection, locationSelection } = this.state;
    return (
      <div className="Filters">
        <h3 className="filters-title">FILTER EVENTS</h3>
        <select
          name="typeSelection"
          value={typeSelection}
          onChange={this.handleChange}
        >
          <option value="Event Type">Event Type</option>
        </select>
        <select
          name="dateSelection"
          value={dateSelection}
          onChange={this.handleChange}
        >
          <option value="Date">Date</option>
        </select>
        <select
          name="locationSelection"
          value={locationSelection}
          onChange={this.handleChange}
        >
          <option value="Location">Location</option>
        </select>
      </div>
    );
  }
}

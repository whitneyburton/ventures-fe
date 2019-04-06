import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const EventContainer = (props) => {
  const { pathname } = props;
  const styles = pathname.includes('profile') ? 'EventContainer-profile' : 'EventContainer-home';
    return (
      <div className={styles} >
      </div>
    )
}

export default EventContainer;


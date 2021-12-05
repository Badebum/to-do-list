import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

const IconButton = ({ children, onCliuck, ...allyProps }) => (
  <button
    type="button"
    className={styles.iconButton}
    onClick={onCliuck}
    {...allyProps}
  >
    {children}
  </button>
);
IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;

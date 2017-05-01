import React from 'react';
import PropTypes from 'prop-types';

/**
 * Icon component
 */
const Icon = ({ type, size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
  >
    <path
      fill={color}
      d={type}
    />
  </svg>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
  color: '#000',
};

export default Icon;

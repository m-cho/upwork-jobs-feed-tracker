import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({
  label,
  symbol,
  ...props
}) => (
  <span
    role="img"
    aria-label={label}
    aria-hidden={label ? 'false' : 'true'}
    {...props}
  >
    {symbol}
  </span>
);

Emoji.propTypes = {
  label: PropTypes.string,
  symbol: PropTypes.string.isRequired
};

Emoji.defaultProps = { label: '' };

export default Emoji;

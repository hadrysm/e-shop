import React from 'react';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => {
  return <div>{children}</div>;
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MainTemplate;

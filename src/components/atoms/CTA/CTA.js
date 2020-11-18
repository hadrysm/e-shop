import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './CTA.style';

const CTA = ({ children, to, href, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

CTA.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  to: PropTypes.string,
  href: PropTypes.string,
};

CTA.defaultProps = {
  children: 'click me',
  to: '/',
  href: '',
};

export default CTA;

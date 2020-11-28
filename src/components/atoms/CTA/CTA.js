import React from 'react';
import PropTypes from 'prop-types';

import TLink from 'providers/PageTransitionProvider/PageTransitionProvider';

import { StyledLink } from './CTA.style';

const CTA = React.forwardRef(
  ({ children, to, href, isButton, isHyperLink, color, ...props }, ref) => {
    if (isButton)
      return (
        <StyledLink as="button" type="button" isButton ref={ref} {...props}>
          {children}
        </StyledLink>
      );

    if (isHyperLink)
      return (
        <StyledLink as="a" isHyperLink href={href} ref={ref} {...props}>
          {children}
        </StyledLink>
      );

    return (
      <StyledLink as={TLink} to={to} color={color} ref={ref} {...props}>
        {children}
      </StyledLink>
    );
  },
);

CTA.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  to: PropTypes.string,
  href: PropTypes.string,
  isButton: PropTypes.bool,
  isHyperLink: PropTypes.bool,
  color: PropTypes.string,
};

CTA.defaultProps = {
  children: 'click me',
  to: '/',
  href: '',
  isButton: false,
  isHyperLink: false,
  color: '#000f24',
};

export default CTA;

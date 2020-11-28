import React from 'react';
import PropTypes from 'prop-types';

import TLink from 'providers/PageTransitionProvider/PageTransitionProvider';

import { StyledLink } from './CTA.style';

const CTA = ({ children, to, href, isButton, isHyperLink, color, ...props }) => {
  if (isButton)
    return (
      <StyledLink as="button" type="button" isButton {...props}>
        {children}
      </StyledLink>
    );

  if (isHyperLink)
    return (
      <StyledLink as="a" isHyperLink href={href} {...props}>
        {children}
      </StyledLink>
    );

  return (
    <StyledLink as={TLink} to={to} color={color} {...props}>
      {children}
    </StyledLink>
  );
};

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
  color: '#ffffff',
};

export default CTA;

import React from 'react';

import CTA from 'components/atoms/CTA/CTA';

import { StyledLogo } from './Logo.styles';

const Logo = () => {
  return (
    <StyledLogo>
      <CTA to="/">e-shop</CTA>
    </StyledLogo>
  );
};

export default Logo;

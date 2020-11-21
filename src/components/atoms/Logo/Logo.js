import React from 'react';

import CTA from 'components/atoms/CTA/CTA';

import routes from 'routes';
import { StyledLogo } from './Logo.styles';

const Logo = () => {
  return (
    <StyledLogo>
      <CTA to={routes.home}>e-shop</CTA>
    </StyledLogo>
  );
};

export default Logo;

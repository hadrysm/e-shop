import React from 'react';
import { Link } from 'gatsby';

import routes from 'routes';
import { StyledLogo } from './Logo.styles';

const Logo = () => {
  return (
    <StyledLogo>
      <Link to={routes.home}>e-shop</Link>
    </StyledLogo>
  );
};

export default Logo;

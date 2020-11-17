import React from 'react';
import { Link } from 'gatsby';

import { StyledLogo } from './Logo.styles';

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">e-shop</Link>
    </StyledLogo>
  );
};

export default Logo;

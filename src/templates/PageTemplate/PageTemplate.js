import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'components/organisms/Navigation/Navigation';

import { Main } from './PageTemplate.style';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
    </>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PageTemplate;

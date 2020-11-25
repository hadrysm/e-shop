import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'components/organisms/Navigation/Navigation';
import Footer from 'components/organisms/Footer/Footer';

import { Wrapper, Main } from './PageTemplate.style';

const PageTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PageTemplate;

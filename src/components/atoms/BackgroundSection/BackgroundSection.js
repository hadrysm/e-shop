import React from 'react';
import PropTypes from 'prop-types';

import { StyledBackgroundImage, InnerWrapper } from './BackgroundSection.style';

const BackgroundSection = ({ fluid, label }) => {
  return (
    <StyledBackgroundImage fluid={fluid} alt="" title="">
      <InnerWrapper>
        <h1>{label}</h1>
      </InnerWrapper>
    </StyledBackgroundImage>
  );
};

BackgroundSection.propTypes = {
  label: PropTypes.string,
  fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

BackgroundSection.defaultProps = {
  label: '',
};

export default BackgroundSection;

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { staggerText } from 'animations';

import { StyledBackgroundImage, InnerWrapper } from './BackgroundSection.style';

const BackgroundSection = ({ fluid, label }) => {
  const textRef = useRef(null);

  useEffect(() => {
    staggerText(textRef.current);
  }, [textRef]);

  return (
    <StyledBackgroundImage fluid={fluid} alt="" title="">
      <InnerWrapper>
        <h1 ref={textRef}>{label}</h1>
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

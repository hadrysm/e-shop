import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { staggerText, scaleX } from 'animations';

import { H1, Hr } from './Headline.style';

const Headline = ({ text }) => {
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    staggerText(textRef.current);
    scaleX(lineRef.current);
  }, [textRef, lineRef]);

  return (
    <>
      <H1 ref={textRef}>{text}</H1>
      <Hr ref={lineRef} />
    </>
  );
};

Headline.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Headline;

import React from 'react';
import PropTypes from 'prop-types';

import { H1, Hr } from './Headline.style';

const Headline = ({ text }) => {
  return (
    <>
      <H1>{text}</H1>
      <Hr />
    </>
  );
};

Headline.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Headline;

import React from 'react';

import Headline from 'components/atoms/Headline/Headline';

import { Wrapper } from './NotFound.style';

const NotFound = () => {
  return (
    <Wrapper>
      <Headline text="404 :(" />
    </Wrapper>
  );
};

export default NotFound;

import React from 'react';
import PropTypes from 'prop-types';

import CTA from 'components/atoms/CTA/CTA';
import { Wrapper, StyledImage, CategoryName, InnerWrapper } from './CategoryBox.style';

const CategoryBox = ({ slug, displayName, fluid }) => {
  return (
    <>
      <Wrapper as={CTA} to={slug}>
        <InnerWrapper>
          <StyledImage fluid={fluid} />
        </InnerWrapper>
        <InnerWrapper>
          <CategoryName>{displayName}</CategoryName>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

CategoryBox.propTypes = {
  displayName: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

export default CategoryBox;

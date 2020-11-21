import React from 'react';
import PropTypes from 'prop-types';

import CTA from 'components/atoms/CTA/CTA';
import { Wrapper, StyledImage, CategoryName, InnerWrapper } from './CategoryBox.style';

const CategoryBox = ({ id, slug, displayName, image: { fluid, alt } }) => {
  return (
    <Wrapper key={id} as={CTA} to={`/categories/${slug}`}>
      <InnerWrapper>
        <StyledImage fluid={fluid} alt={alt} title={alt} />
      </InnerWrapper>
      <InnerWrapper>
        <CategoryName>{displayName}</CategoryName>
      </InnerWrapper>
    </Wrapper>
  );
};

CategoryBox.propTypes = {
  displayName: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    alt: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default CategoryBox;

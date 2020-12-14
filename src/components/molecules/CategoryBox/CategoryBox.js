import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import CTA from 'components/atoms/CTA/CTA';

import { fadeInStagger } from 'animations';

import { Wrapper, StyledImage, Overflow, CategoryName, InnerWrapper } from './CategoryBox.style';

const CategoryBox = ({ id, slug, displayName, image: { fluid, alt } }, index) => {
  const contentRef = useRef(null);
  const categoryRef = useRef(null);

  const direction = index % 2;

  useEffect(() => {
    const { children } = categoryRef.current;

    const from = direction ? '-' : '+';

    const gsapOptions = {
      scrollTrigger: {
        trigger: children,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    };

    fadeInStagger([...children], gsapOptions, from);
  }, [categoryRef]);

  return (
    <CTA key={id} to={`/categories/${slug}`}>
      <Wrapper ref={categoryRef} direction={direction}>
        <InnerWrapper>
          <Overflow>
            <StyledImage fluid={fluid} alt={alt} title={alt} />
          </Overflow>
        </InnerWrapper>
        <InnerWrapper ref={contentRef}>
          <CategoryName>{displayName}</CategoryName>
        </InnerWrapper>
      </Wrapper>
    </CTA>
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

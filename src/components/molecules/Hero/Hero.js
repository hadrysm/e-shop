import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Wrapper, InnerWrapper } from './Hero.style';

const Hero = () => {
  const {
    file: {
      childImageSharp: {
        fluid: { src },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        file(name: { eq: "hero" }) {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 800) {
              src
            }
          }
        }
      }
    `,
  );

  return (
    <Wrapper>
      <InnerWrapper bgImage={src}>
        <h1>find your own style</h1>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Hero;

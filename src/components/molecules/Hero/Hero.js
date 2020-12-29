import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundSection from 'components/atoms/BackgroundSection/BackgroundSection';
import { Wrapper, InnerWrapper } from './Hero.style';

const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <Wrapper>
      <InnerWrapper>
        <BackgroundSection fluid={fluid} label="find your own style" />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Hero;

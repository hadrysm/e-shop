import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import CategoryBox from 'components/molecules/CategoryBox/CategoryBox';
import { Wrapper } from './Categories.style';

const Categories = () => {
  const {
    allDatoCmsCategory: { nodes: categoryItems },
  } = useStaticQuery(graphql`
    {
      allDatoCmsCategory {
        nodes {
          id
          slug
          displayName
          image {
            alt
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  `);
  return <Wrapper>{categoryItems.map(CategoryBox)}</Wrapper>;
};

export default Categories;

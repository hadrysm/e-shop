import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { useFilterAndSort } from 'hooks/useFilterAndSort';

import { Wrapper, Size, Checkmark, Name } from './SizesFilters.style';

const query = graphql`
  {
    allDatoCmsSize(sort: { fields: [order], order: ASC }) {
      sizes: nodes {
        id: originalId
        size
      }
    }
  }
`;

const SizesFilters = () => {
  const { markedSize, handleIncludeSize } = useFilterAndSort();

  const {
    allDatoCmsSize: { sizes },
  } = useStaticQuery(query);

  return (
    <Wrapper>
      {sizes.map(({ size, id }) => (
        <Size key={id} onClick={() => handleIncludeSize(size)}>
          <Checkmark isActive={markedSize.some(sizeValue => sizeValue === size)} />
          <Name>{size}</Name>
        </Size>
      ))}
    </Wrapper>
  );
};

export default SizesFilters;

import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { FiltersContext } from 'providers/FiltersProvider/FiltersProvider';

import { Wrapper, Size, Checkmark, Name } from './SizesFilters.style';

const SizesFilters = () => {
  const { includeSize, markedSize } = useContext(FiltersContext);

  const {
    allDatoCmsSize: { sizes },
  } = useStaticQuery(graphql`
    {
      allDatoCmsSize {
        sizes: nodes {
          id: originalId
          size
        }
      }
    }
  `);

  return (
    <Wrapper>
      {sizes.map(({ size, id }) => (
        <Size key={id} onClick={() => includeSize(size)}>
          <Checkmark isActive={markedSize.some(sizeValue => sizeValue === size)} />
          <Name>{size}</Name>
        </Size>
      ))}
    </Wrapper>
  );
};

export default SizesFilters;

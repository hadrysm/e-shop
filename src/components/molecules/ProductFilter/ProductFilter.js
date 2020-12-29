import React from 'react';

import CTA from 'components/atoms/CTA/CTA';
import Select from 'components/atoms/Select/Select';

import { useFilterAndSort } from 'hooks/useFilterAndSort';

import { Wrapper, Icon } from './ProductFilter.style';

const ProductFilter = () => {
  const { handleSortBy, sortOptions, handleShowAside, sortBy } = useFilterAndSort();

  const sortByInput = e => {
    const { value } = e.target;
    handleSortBy(value);
  };

  return (
    <Wrapper>
      <CTA isButton onClick={handleShowAside}>
        <Icon />
        <span> Filtry</span>
      </CTA>
      <Select
        label="sortuj"
        name="sort"
        options={sortOptions}
        onChange={sortByInput}
        value={sortBy}
      />
    </Wrapper>
  );
};

export default ProductFilter;

import React from 'react';
import { FaTasks } from 'react-icons/fa';

import CTA from 'components/atoms/CTA/CTA';
import Select from 'components/atoms/Select/Select';

import { useFilterAndSort } from 'hooks/useFilterAndSort';

import { Wrapper } from './ProductFilter.style';

const ProductFilter = () => {
  const { handleSortBy, sortOptions, handleShowAside, sortBy } = useFilterAndSort();

  const sortByInput = e => {
    const { value } = e.target;
    handleSortBy(value);
  };

  return (
    <Wrapper>
      <CTA isButton onClick={handleShowAside}>
        <FaTasks style={{ marginRight: '1rem' }} />
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

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

import CTA from 'components/atoms/CTA/CTA';
import Select from 'components/atoms/Select/Select';
import { FiltersContext } from 'providers/FiltersProvider/FiltersProvider';

import { Wrapper } from './ProductFilter.style';

const ProductFilter = () => {
  const { sortBy, sortOptions, showAside } = useContext(FiltersContext);

  const sortByInput = e => {
    const { value } = e.target;
    sortBy(value);
  };

  return (
    <Wrapper>
      <CTA isButton onClick={showAside}>
        <div>
          <FontAwesomeIcon icon={faTasks} />
          <span> Filtry</span>
        </div>
      </CTA>
      <Select label="sortuj" name="sort" options={sortOptions} onChange={sortByInput} />
    </Wrapper>
  );
};

export default ProductFilter;

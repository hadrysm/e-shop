import React, { useEffect } from 'react';

import Aside from 'components/molecules/Aside/Aside';
import FiltersContent from 'components/molecules/FiltersContent/FiltersContent';

import { useFilterAndSort } from 'hooks/useFilterAndSort';
import { Wrapper } from './AsideFilters.style';

const AsideFilters = () => {
  const {
    isFiltersVisible,
    handleHideAside,
    handleFiltrBySearch,
    searchInputValue,
  } = useFilterAndSort();

  useEffect(() => {
    handleFiltrBySearch();
  }, [searchInputValue]);

  return (
    <Aside title="filtry" close={handleHideAside} isOpen={isFiltersVisible}>
      <Wrapper>
        <FiltersContent />
      </Wrapper>
    </Aside>
  );
};

export default AsideFilters;

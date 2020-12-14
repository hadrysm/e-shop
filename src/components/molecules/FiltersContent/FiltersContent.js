import React from 'react';
import InputRange from 'react-input-range';

import SizesFilters from 'components/molecules/SizesFilters/SizesFilters';
import Input from 'components/atoms/Input/Input';

import { useFilterAndSort } from 'hooks/useFilterAndSort';

import { Button, Heading, ButtonsWrapper, InputRangeWrapper } from './FiltersContent.style';

const FiltersContent = () => {
  const {
    handleApllyFilters,
    handleClearFilters,
    handleSearch,
    priceRange,
    handleIncludePrice,
    searchInputValue,
  } = useFilterAndSort();

  const handleApply = () => {
    handleApllyFilters();
  };

  return (
    <>
      <Input
        placeholder="Wyszukaj..."
        icon="search"
        value={searchInputValue}
        onChange={e => handleSearch(e.target.value)}
      />
      <Heading>Rozmiary</Heading>
      <SizesFilters />
      <Heading>Cena</Heading>
      <InputRangeWrapper>
        <InputRange
          step={25}
          maxValue={250}
          minValue={0}
          value={priceRange}
          onChange={value => handleIncludePrice(value)}
        />
      </InputRangeWrapper>
      <ButtonsWrapper>
        <Button isButton onClick={handleApply}>
          Filtruj
        </Button>
        <Button isButton secondary onClick={handleClearFilters}>
          Wyczyść filtry
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default FiltersContent;

import React, { useContext } from 'react';

import { FiltersContext } from 'providers/FiltersProvider/FiltersProvider';
import SizesFilters from 'components/molecules/SizesFilters/SizesFilters';
import Input from 'components/atoms/Input/Input';

import { Button, Heading, ButtonsWrapper } from './FiltersContent.style';

const FiltersContent = () => {
  const { hideAside, apllyFilters } = useContext(FiltersContext);

  const handleApply = () => {
    apllyFilters();
    hideAside();
  };

  return (
    <>
      <Input placeholder="Wyszukaj..." icon="search" />
      <Heading>Rozmiary</Heading>
      <SizesFilters />
      <Heading>Cena</Heading>
      input ragne
      <ButtonsWrapper>
        <Button isButton onClick={handleApply}>
          Filtruj
        </Button>
        <Button isButton secondary onClick={() => {}}>
          Wyczyść filtry
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default FiltersContent;

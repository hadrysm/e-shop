import React from 'react';
import PropTypes from 'prop-types';

import Aside from 'components/molecules/Aside/Aside';
import FiltersContent from 'components/molecules/FiltersContent/FiltersContent';

import { Wrapper } from './AsideFilters.style';

const AsideFilters = ({ isOpen, close }) => {
  return (
    <Aside title="filtry" side="left" close={close} isOpen={isOpen}>
      <Wrapper>
        <FiltersContent />
      </Wrapper>
    </Aside>
  );
};

AsideFilters.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

AsideFilters.defaultProps = {
  isOpen: false,
};
export default AsideFilters;

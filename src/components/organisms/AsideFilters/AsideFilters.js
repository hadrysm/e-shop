import React from 'react';
import PropTypes from 'prop-types';

import Aside from 'components/molecules/Aside/Aside';

const AsideFilters = ({ isOpen, close }) => {
  return (
    <Aside title="filtry" side="left" close={close} isOpen={isOpen}>
      child
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

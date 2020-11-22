import React from 'react';
import PropTypes from 'prop-types';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, InnerWrapper, Label, StyledSelect, Option, Icon } from './Select.style';

const Select = ({ name, label, options, ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label}
        <InnerWrapper>
          <StyledSelect id={name} name={name} {...props}>
            {options.map(({ value, displayValue }) => (
              <Option key={value} value={value}>
                {displayValue}
              </Option>
            ))}
          </StyledSelect>
          <Icon icon={faCaretDown} />
        </InnerWrapper>
      </Label>
    </Wrapper>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Select.defaultProps = {
  label: 'label',
};

export default Select;

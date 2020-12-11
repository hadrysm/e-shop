import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import PageOverlay from 'components/atoms/PageOverlay/PageOverlay';
import CTA from 'components/atoms/CTA/CTA';

import { Wrapper, HeadingWrapper, Heading } from './Aside.styled';

const Aside = ({ title, children, isOpen, close }) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <PageOverlay isActive={isOpen}>
      <Wrapper isOpen={isOpen}>
        <HeadingWrapper>
          <Heading>{title}</Heading>
          <CTA isButton onClick={close} color="white">
            <FontAwesomeIcon icon={faTimes} color="black" />
          </CTA>
        </HeadingWrapper>
        {children}
      </Wrapper>
    </PageOverlay>
  );
};

Aside.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Aside.defaultProps = {
  isOpen: false,
};

export default Aside;

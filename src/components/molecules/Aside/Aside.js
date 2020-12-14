import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import PageOverlay from 'components/atoms/PageOverlay/PageOverlay';
import CTA from 'components/atoms/CTA/CTA';

import useClickOutsite from 'hooks/useClickOutsite';
import { Wrapper, InnerWrapper, HeadingWrapper, Heading } from './Aside.styled';

const Aside = ({ title, children, isOpen, close, isNav }) => {
  const asideRef = useRef(null);

  useClickOutsite(asideRef, close);

  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, [isOpen]);

  if (isNav)
    return (
      <PageOverlay isActive={isOpen} isNav>
        <Wrapper isOpen={isOpen} ref={asideRef} isNav>
          <HeadingWrapper isNav>
            <CTA isButton onClick={close} color="transparent">
              <FontAwesomeIcon icon={faTimes} color="white" />
            </CTA>
          </HeadingWrapper>

          <InnerWrapper>{children}</InnerWrapper>
        </Wrapper>
      </PageOverlay>
    );

  return (
    <PageOverlay isActive={isOpen}>
      <Wrapper isOpen={isOpen} ref={asideRef}>
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
  isNav: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Aside.defaultProps = {
  isOpen: false,
  isNav: false,
};

export default Aside;

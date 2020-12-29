import React, { useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import PageOverlay from 'components/atoms/PageOverlay/PageOverlay';
import CTA from 'components/atoms/CTA/CTA';

import useClickOutsite from 'hooks/useClickOutsite';
import { Wrapper, InnerWrapper, HeadingWrapper, Heading } from './Aside.styled';

const Aside = ({ title, children, isOpen, close, isNav }) => {
  const asideRef = useRef(null);

  useClickOutsite(asideRef, close);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  if (isNav) {
    return (
      <PageOverlay isActive={isOpen} isNav>
        <Wrapper isOpen={isOpen} ref={asideRef} isNav as="div">
          <HeadingWrapper isNav>
            <Heading isNav>{title}</Heading>
            <CTA isButton onClick={close} color="transparent">
              <FaTimes />
            </CTA>
          </HeadingWrapper>
          <InnerWrapper>{children}</InnerWrapper>
        </Wrapper>
      </PageOverlay>
    );
  }

  return (
    <PageOverlay isActive={isOpen}>
      <FocusLock>
        <Wrapper isOpen={isOpen} ref={asideRef}>
          <HeadingWrapper>
            <Heading>{title}</Heading>
            <CTA isButton onClick={close} color="white">
              <FaTimes color="black" />
            </CTA>
          </HeadingWrapper>
          {children}
        </Wrapper>
      </FocusLock>
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

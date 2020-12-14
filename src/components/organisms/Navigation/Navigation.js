import React, { useContext, useRef, useEffect, useState } from 'react';

import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import Burger from 'components/atoms/Burger/Burger';
import ShoppingButton from 'components/atoms/ShoppingButton/ShoppingButton';

import { NavigationStateContext } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { navigationOnScroll } from 'animations';

import { gsap } from 'gsap';
import { Wrapper, Header, InnerWrapper } from './Navigation.style';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { handleCloseMenu, isMenuOpen } = useContext(NavigationStateContext);
  const navigationRef = useRef(null);

  useEffect(() => {
    const navigation = navigationRef.current;

    navigationOnScroll(navigation, setIsScrolled);
  }, [navigationRef]);

  useEffect(() => {
    const navigation = navigationRef.current;

    gsap.fromTo(navigation, { y: -300 }, { y: 0, ease: 'power3.out', duration: 1.6 });
  }, [navigationRef]);

  return (
    <Wrapper ref={navigationRef} isScrolled={isScrolled}>
      <Header>
        <InnerWrapper>
          <Burger />
          <Logo />
          <ShoppingButton />
        </InnerWrapper>
        <NavList isMenuOpen={isMenuOpen} close={handleCloseMenu} />
      </Header>
    </Wrapper>
  );
};

export default Navigation;

import React, { useContext, useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import Burger from 'components/atoms/Burger/Burger';
import ShoppingButton from 'components/atoms/ShoppingButton/ShoppingButton';

import { NavigationStateContext } from 'providers/NavigationStateProvider/NavigationStateProvider';

import { Wrapper, Header, InnerWrapper } from './Navigation.style';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { toggleMenuVisibility, isMenuOpen } = useContext(NavigationStateContext);
  const navigationRef = useRef(null);

  useEffect(() => {
    const navigation = navigationRef.current;

    gsap.registerPlugin(ScrollTrigger);

    if (navigation) {
      const actionNav = gsap.to(navigation, {
        yPercent: '-=100',
        duration: 0.5,
        ease: 'power3.inOut',
        paused: true,
      });

      ScrollTrigger.create({
        trigger: navigation,
        start: '50px top',
        end: 99999,
        onToggle: ({ isActive }) => setIsScrolled(isActive),
        onUpdate: ({ direction, isActive }) => {
          if (direction === -1) {
            actionNav.reverse();
          }
          if (direction === 1) {
            actionNav.play();
          } else if (direction === 1 && isActive === true) {
            actionNav.play();
          }
        },
      });
    }
  }, [navigationRef]);

  return (
    <Wrapper ref={navigationRef} isScrolled={isScrolled}>
      <Header>
        <InnerWrapper>
          <Burger onClick={toggleMenuVisibility} isMenuOpen={isMenuOpen} />
          <Logo />
          <ShoppingButton />
        </InnerWrapper>
        <NavList isMenuOpen={isMenuOpen} />
      </Header>
    </Wrapper>
  );
};

export default Navigation;

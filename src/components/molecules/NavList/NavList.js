import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import CTA from 'components/atoms/CTA/CTA';

import routes from 'routes';
import { toggleMenuAnimation } from 'animations';
import { Wrapper, InnerWrapper, Nav, List, Item } from './NavList.style';

const sections = [
  { label: 'T-shirty', path: routes.tshirts },
  { label: 'Koszule & Bluzki', path: routes.shirts },
  { label: 'Spodnie', path: routes.pants },
  { label: 'Bluzy', path: routes.hoodies },
  { label: 'Sukienki & Spódnice', path: routes.skirts },
  { label: 'Kurtki & Marynarki', path: routes.jackets },
  { label: 'Torby', path: routes.bags },
  { label: 'Dodatki', path: routes.additives },
];

const NavList = ({ isMenuOpen }) => {
  const wrapper = useRef(null);
  const listContainer = useRef(null);

  useEffect(() => {
    const container = wrapper.current;
    const listItems = listContainer.current.children;

    toggleMenuAnimation([container, listItems], isMenuOpen);
  }, [wrapper, listContainer, isMenuOpen]);

  return (
    <Wrapper ref={wrapper}>
      <InnerWrapper>
        <Nav>
          <List ref={listContainer}>
            {sections.map(({ label, path }) => (
              <Item key={path}>
                <CTA to={path}>{label}</CTA>
              </Item>
            ))}
          </List>
        </Nav>
      </InnerWrapper>
    </Wrapper>
  );
};

NavList.propTypes = {
  isMenuOpen: PropTypes.bool,
};

NavList.defaultProps = {
  isMenuOpen: false,
};

export default NavList;

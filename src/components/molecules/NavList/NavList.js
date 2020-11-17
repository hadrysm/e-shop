import React from 'react';

import CTA from 'components/atoms/CTA/CTA';

import { Wrapper, InnerWrapper, Nav, List, Item } from './NavList.style';

// change this
const sections = [
  { product: 'T-shirty', id: 'tshirts' },
  { product: 'Koszule & Bluzki', id: 'shirts' },
  { product: 'Spodnie', id: 'pants' },
  { product: 'Bluzy', id: 'hoodies' },
  { product: 'Sukienki & Spódnice', id: 'skirts' },
  { product: 'Kurtki & Marynarki', id: 'jackets' },
  { product: 'Torby', id: 'bags' },
  { product: 'Dodatki', id: 'additives' },
];

const NavList = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Nav>
          <List>
            {sections.map(link => (
              <Item key={link.product}>
                <CTA>{link.product}</CTA>
              </Item>
            ))}
          </List>
        </Nav>
      </InnerWrapper>
    </Wrapper>
  );
};

export default NavList;

import React from 'react';

import CTA from 'components/atoms/CTA/CTA';

import routes from 'routes';
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

const NavList = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Nav>
          <List>
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

export default NavList;

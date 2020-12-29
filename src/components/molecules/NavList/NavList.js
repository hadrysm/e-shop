import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import CTA from 'components/atoms/CTA/CTA';
import Aside from 'components/molecules/Aside/Aside';

import { Nav, List, Item } from './NavList.style';

const query = graphql`
  query CATEGORY_ITEMS {
    allDatoCmsCategory {
      nodes {
        id
        slug
        displayName
      }
    }
  }
`;

const NavList = ({ isMenuOpen, close }) => {
  const {
    allDatoCmsCategory: { nodes: categoryItems },
  } = useStaticQuery(query);

  return (
    <Aside title="Kategorie" close={close} isOpen={isMenuOpen} isNav>
      <Nav>
        <List>
          {categoryItems.map(({ id, slug, displayName }) => (
            <Item key={id}>
              <CTA to={`/categories/${slug}`}>{displayName}</CTA>
            </Item>
          ))}
        </List>
      </Nav>
    </Aside>
  );
};

NavList.propTypes = {
  isMenuOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

NavList.defaultProps = {
  isMenuOpen: false,
};

export default NavList;

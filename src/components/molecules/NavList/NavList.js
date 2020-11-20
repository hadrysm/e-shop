import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import CTA from 'components/atoms/CTA/CTA';

import { toggleMenuAnimation } from 'animations';
import { Wrapper, InnerWrapper, Nav, List, Item } from './NavList.style';

const NavList = ({ isMenuOpen }) => {
  const {
    allDatoCmsCategory: { nodes: categoryItems },
  } = useStaticQuery(graphql`
    query CATEGORY_ITEMS {
      allDatoCmsCategory {
        nodes {
          id
          slug
          displayName
        }
      }
    }
  `);

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
            {categoryItems.map(({ id, slug, displayName }) => (
              <Item key={id}>
                <CTA to={slug}>{displayName}</CTA>
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

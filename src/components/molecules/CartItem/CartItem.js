import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import CTA from 'components/atoms/CTA/CTA';

import {
  Wrapper,
  InnerWrapper,
  StyledImage,
  ImageWrapper,
  ProductName,
  Quantity,
  Box,
  Price,
  Button,
} from './CartItem.style';

const CartItem = ({ id, price, discountPrice, image, name }) => {
  //  letter from props

  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    {
      file(name: { eq: "hero" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  console.log(image);
  return (
    <Wrapper key={id}>
      <InnerWrapper grow={3}>
        <ImageWrapper>
          <StyledImage fluid={fluid} alt={name} title={name} />
        </ImageWrapper>
        <ProductName>{name}</ProductName>
      </InnerWrapper>

      <InnerWrapper grow={1.5}>
        <Box>
          <CTA as={Button} isButton>
            <FontAwesomeIcon icon={faMinus} />
          </CTA>
          <Quantity>2</Quantity>
          <CTA as={Button} isButton>
            <FontAwesomeIcon icon={faPlus} />
          </CTA>
        </Box>

        <Price>{discountPrice || price} zł</Price>
      </InnerWrapper>

      <CTA isButton as={Button} isRemove onClick={() => {}}>
        <FontAwesomeIcon icon={faTimes} />
      </CTA>
    </Wrapper>
  );
};

//  change !!

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discountPrice: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CartItem;

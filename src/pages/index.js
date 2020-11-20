import React from 'react';

import SEO from 'components/utilities/SEO/SEO';
import Hero from 'components/molecules/Hero/Hero';
import Categories from 'components/organisms/Categories/Categories';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Categories />
  </>
);

export default IndexPage;

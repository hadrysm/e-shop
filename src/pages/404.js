import React from 'react';

import SEO from 'components/utilities/SEO/SEO';
import NotFound from 'components/organisms/NotFound/NotFound';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <NotFound />
  </>
);

export default NotFoundPage;

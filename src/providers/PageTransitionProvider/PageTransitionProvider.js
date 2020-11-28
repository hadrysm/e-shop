import React from 'react';
import PropTypes from 'prop-types';
import TransitionLink from 'gatsby-plugin-transition-link';

import { enterAnimation, exitAnimation } from 'animations';

const PageTransitionProvider = ({ children, to, color, ...props }) => {
  return (
    <TransitionLink
      {...props}
      to={to}
      exit={{
        trigger: ({ exit, node }) => exitAnimation(color, exit, node),
        length: 0.5,
      }}
      entry={{
        delay: 0.5,
        trigger: ({ exit, node }) => enterAnimation(color, exit, node),
      }}
    >
      {children}
    </TransitionLink>
  );
};

PageTransitionProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
};

PageTransitionProvider.defaultProps = {
  color: '#000f24',
};

export default PageTransitionProvider;

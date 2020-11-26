import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import CTA from 'components/atoms/CTA/CTA';

import { Wrapper, InnerWrapper, Box, List, ListItem } from './Footer.style';

const pageLinks = [
  {
    id: 0,
    label: 'strona główna',
  },
  {
    id: 1,
    label: 'o nas',
  },
  {
    id: 2,
    label: 'kontakt',
  },
  {
    id: 3,
    label: 'blog',
  },
  {
    id: 4,
    label: 'metody płatności',
  },
  {
    id: 5,
    label: 'polityka prywatności',
  },
  {
    id: 6,
    label: 'reklamacje',
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Box>
          <List>
            {pageLinks.map(({ id, label }) => (
              <ListItem key={id}>
                <CTA>{label}</CTA>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <List>
            <ListItem isSocial>
              <CTA
                isHyperLink
                href="https://github.com/hadrysm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </CTA>
            </ListItem>
            <ListItem isSocial>
              <CTA
                isHyperLink
                href="https://www.linkedin.com/in/mateusz-hadry%C5%9B-02a4951a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </CTA>
            </ListItem>
            <ListItem isSocial>
              <CTA
                isHyperLink
                href="https://twitter.com/hadrys_m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </CTA>
            </ListItem>
          </List>
        </Box>
        <Box isCopyright>
          <small>Copyright &copy; Mateusz Hadryś</small>
        </Box>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;

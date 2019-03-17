import React from 'react';
import { styled } from 'linaria/react';

const LogoWrapper = styled.div`
  &,
  &:hover {
    color: white !important;
    font-size: 1.4rem;
  }
`;

const Logo = () => (
  <LogoWrapper>
    GRANT <strong>CENTER</strong>
  </LogoWrapper>
);

export default Logo;

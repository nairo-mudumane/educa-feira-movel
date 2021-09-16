import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
  background: var(--bg-gray-1);
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

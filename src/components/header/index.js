import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Tittle from './Tittle';

const StyledHeader = styled.header`
  background: var(--bg-gray-1);
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className={`container`}>
        <div className={`header-container`}>
          <Logo />
          <Tittle />
        </div>
      </div>
    </StyledHeader>
  );
}

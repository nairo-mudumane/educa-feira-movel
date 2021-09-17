import React from 'react';
import styled from 'styled-components';
import logoSrc from '../../assets/imgs/logo/educa-logo-1.png';

const StyledLogo = styled.div`
  max-width: 2.5rem;
`;

export default function Logo() {
  return (
    <StyledLogo>
      <img src={logoSrc} alt="Educa Mocambique - Logo Feria Movel" />
    </StyledLogo>
  );
}

import React from 'react';
import styled from 'styled-components';
import Logo from '../footer/Logo';

const StyledFooter = styled.footer`
  background: var(--bg-white-1);
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  .footer-copy-right-wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    color: var(--color-gray-1);
  }
  .footer-logo {
    max-width: 4rem;
  }
  .copy {
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <section className={`footer-copy-right-wrapper container`}>
        <div className={`footer-logo`}>
          <Logo />
        </div>
        <p className={`no-margin copy`}>&copy; 2021, Educa Moçambique</p>
      </section>
    </StyledFooter>
  );
}

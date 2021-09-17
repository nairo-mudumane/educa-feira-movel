import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: var(--bg-white-1);
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

  .footer-copy-right-wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    color: var(--color-gray-1);
  }
  .footer-copy-right-author {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--color-yellow-1);
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <section className={`footer-copy-right-wrapper container`}>
        <p className={`no-margin`}>&copy; Educa Mocambique, 2021</p>
        <p className={`no-margin`}>
          Desenvolvido por:{' '}
          <a href="#author" className={`footer-copy-right-author`}>
            {/* Mozambique Global Institute */}
            autor
          </a>
        </p>
      </section>
    </StyledFooter>
  );
}

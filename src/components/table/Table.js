import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: var(--bg-white-1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  padding: 0.5rem;
  margin: 1rem auto;
`;

export default function Table() {
  return (
    <StyledContainer>
      <table className={`table`}>
        <thead className={`thead`}>
          <tr>
            <td>Nome</td>
            <td>Categoria</td>
            <td>Pontos</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nairo Mudumane</td>
            <td>Vodacom</td>
            <td>234</td>
          </tr>
          <tr>
            <td>Nairo Mudumane</td>
            <td>Vodacom</td>
            <td>234</td>
          </tr>
        </tbody>
      </table>
    </StyledContainer>
  );
}

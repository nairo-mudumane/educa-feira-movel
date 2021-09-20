import React from 'react';
import styled from 'styled-components';
import BgWhite from '../../layout/wrappers/BgWhite';

const StyledContainer = styled.div`
  .thead {
    color: var(--color-yellow-1);
  }
`;

export default function Table() {
  return (
    <BgWhite>
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
            <tr className={`animeLeft`}>
              <td>Nairo Mudumane</td>
              <td>Vodacom</td>
              <td>234</td>
            </tr>
            <tr className={`animeLeft`}>
              <td>Nairo Mudumane</td>
              <td>Vodacom</td>
              <td>234</td>
            </tr>
          </tbody>
        </table>
      </StyledContainer>
    </BgWhite>
  );
}

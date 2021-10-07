import React from 'react';
import styled from 'styled-components';
import BgWhite from '../../layout/wrappers/BgWhite';

const StyledContainer = styled.div`
  .thead {
    color: var(--color-yellow-1);
  }
`;

export default function Table({ users }) {
  // React.useEffect(() => {
  function sortNumbers() {
    users.sort((a, b) => {
      return +b.score - +a.score;
    });
  }
  sortNumbers();
  // }, [users]);

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
            {users.map((user, index) => (
              <tr key={index} className={`animeLeft`}>
                <td>{user.name}</td>
                <td>{user.category}</td>
                <td>{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </StyledContainer>
    </BgWhite>
  );
}

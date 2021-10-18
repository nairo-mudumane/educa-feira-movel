import React from 'react';
import styled from 'styled-components';
import BgWhite from '../../layout/wrappers/BgWhite';

const StyledContainer = styled.div`
  .thead {
    font-size: 1.2rem;
    color: var(--color-yellow-1);
  }
  .tbody {
    font-size: 1.2rem;
  }
  .no-users {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
  }
  .no-users > h2 {
    font-size: 2.5rem;
    text-transform: capitalize;
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
        {users.length === 0 ? (
          <div className={`no-users`}>
            <h2>Sem usuarios</h2>
          </div>
        ) : (
          <table className={`table`}>
            <thead className={`thead`}>
              <tr>
                <td>Nome</td>
                <td>Pontos</td>
              </tr>
            </thead>
            <tbody className={`tbody`}>
              {users.slice(0, 10).map((user, index) => (
                <tr key={index} className={`animeLeft`}>
                  <td>{user.name}</td>
                  <td>{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </StyledContainer>
    </BgWhite>
  );
}

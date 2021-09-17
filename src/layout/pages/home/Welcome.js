import styled from 'styled-components';
const StyledConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;

  .welcome-bar {
    width: 100%;
  }
  .wc-text {
    color: var(--color-yellow-1);
  }
  .wc-text-tiny {
    font-size: 1.5rem;
  }
  .wc-text-huge {
    font-size: 5rem;
    margin-top: -0.6rem;
    margin-left: -4px;
  }
  .wc-text-medium {
    font-size: 1.8rem;
    margin-top: -0.4rem;
  }
`;

export default function Welcome() {
  return (
    <StyledConatiner>
      <div className={`welcome-bar`}>
        <h3 className={`wc-text wc-text-tiny  no-margin`}>Bem vindo ao</h3>
        <h1 className={`wc-text wc-text-huge animeTop no-margin`}>
          Educa Móvel 2021!
        </h1>
        <h5 className={`wc-text wc-text-medium animeBottom no-margin`}>
          Primeira edicao
        </h5>
      </div>
    </StyledConatiner>
  );
}

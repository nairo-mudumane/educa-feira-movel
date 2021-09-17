import styled from 'styled-components';
const StyledQuizTitle = styled.div`
  background: var(--bg-yellow-1);
  border: 3px solid var(--bg-white-1);
  border-radius: 4px;

  padding: 0.5rem;
  margin: 0.5rem auto;

  > h3 {
    color: var(--color-white-1);
    font-size: 1.5rem;
    text-align: center;
    text-transform: capitalize;
  }
`;

export default function QuizTitle() {
  return (
    <StyledQuizTitle className={`animeTop`}>
      <h3 className={`no-margin`}>Teste vocacional</h3>
    </StyledQuizTitle>
  );
}

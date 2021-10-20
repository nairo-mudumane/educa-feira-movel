import styled from 'styled-components';
const StyledBody = styled.div`
  margin: 0.5rem;
  p {
    font-size: 1.5rem;
    color: var(--color-gray-1);
    margin-bottom: 0.2rem;
  }
`;

export default function InfoBody({ body }) {
  return (
    <StyledBody>
      <p className={`animeLeft`}>{body}</p>
    </StyledBody>
  );
}

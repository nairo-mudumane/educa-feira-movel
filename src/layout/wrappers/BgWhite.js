import styled from 'styled-components';

const StyledContainer = styled.div`
  background: var(--bg-white-1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  padding: 0.5rem;
  margin: 1rem auto;

  max-height: 68vh;
`;

export default function BgWhite({ children }) {
  return (
    <StyledContainer className={`animeBottom`}>{children}</StyledContainer>
  );
}

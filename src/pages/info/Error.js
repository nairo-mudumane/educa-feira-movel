import styled from 'styled-components';

const StyledError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 70vh;
  padding: 0.5rem 1rem;
`;

export default function Error({ children }) {
  return <StyledError>{children}</StyledError>;
}

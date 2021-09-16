import styled from 'styled-components';

const StyledMain = styled.main`
  background: yellow;
`;

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

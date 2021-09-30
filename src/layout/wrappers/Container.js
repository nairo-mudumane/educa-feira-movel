import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

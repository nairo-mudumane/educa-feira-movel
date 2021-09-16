import styled from 'styled-components';
import Header from '../../../components/header';

const StyledHome = styled.div`
  background: red;
`;

export default function HomeVisitor() {
  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
}

import styled from 'styled-components';
import Header from '../../../components/header';

const StyledHome = styled.div`
  background: red;
  height: 1500px;
`;

export default function HomeVisitor() {
  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
}

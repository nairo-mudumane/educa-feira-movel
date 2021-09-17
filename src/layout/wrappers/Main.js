import styled from 'styled-components';
import bgUrl from '../../assets/imgs/bg/bg-white-2.png';

const StyledMain = styled.main`
  background: url(${bgUrl}), var(--bg-white-2);
  width: 100%;
`;

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

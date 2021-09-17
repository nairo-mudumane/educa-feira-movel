import styled from 'styled-components';
import bgUrl from '../../assets/imgs/bg/bg-white-3.png';

const StyledMain = styled.div`
  background: url(${bgUrl}), var(--bg-white-2);
  width: 100%;
`;

export default function Main({ children }) {
  return <StyledMain className={`no-margin no-padding`}>{children}</StyledMain>;
}

import styled from 'styled-components';

const StyledBody = styled.main`
  width: 100%;
  height: 81vh;
  overflow: hidden;
`;

export default function Body({ children }) {
  return (
    <StyledBody>
      <div className={`container`}>
        <div className={`no-margin no-padding`}>{children}</div>
      </div>
    </StyledBody>
  );
}

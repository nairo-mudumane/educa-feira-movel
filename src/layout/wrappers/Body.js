import styled from 'styled-components';

const StyledBody = styled.main`
  width: 100%;
  min-height: 80vh;
`;

export default function Body({ children }) {
  return (
    <StyledBody>
      <div className={`container`}>
        <div classsName={`no-margin no-padding`}>{children}</div>
      </div>
    </StyledBody>
  );
}

import styled from 'styled-components';

const StyledLoader = styled.div`
  min-width: 8vh;
  min-height: 8vh;
  position: relative;
  .spin {
    border: 8px solid var(--bg-yellow-1);
    border-radius: 50%;
    border-right-color: transparent;

    width: 100%;
    height: 100%;
    position: absolute;

    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return (
    <StyledLoader>
      <div className={`spin`} />
    </StyledLoader>
  );
}

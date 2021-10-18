import styled from 'styled-components';
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;

  .welcome-bar {
    width: 100%;
    text-align: left;
  }
  .wc-text {
    color: var(--color-yellow-1);
  }
  .wc-text-tiny {
    font-size: 2.5rem;
  }
  .wc-text-huge {
    font-size: 6rem;
    margin-top: -0.6rem;
    margin-left: -4px;
  }
  .wc-text-medium {
    font-size: 2.8rem;
    margin-top: -0.4rem;
  }
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

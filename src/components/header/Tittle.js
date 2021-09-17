import styled from 'styled-components';

const StyledTitle = styled.div`
  .header-title {
    color: var(--color-white-1);
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

export default function Title() {
  return (
    <StyledTitle>
      <h1 className={`header-title no-margin`}>Educa Móvel</h1>
    </StyledTitle>
  );
}
